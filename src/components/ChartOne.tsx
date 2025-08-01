import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

export default function ChartOne({
  data,
  exp,
  metric,
}: {
  data: any[];
  exp?: string;
  metric?: string;
}) {
  type InputItem = {
    id: number;
    exp_id: string;
    metric_name: string;
    step: number;
    value: number;
  };

  type OutputStructure = {
    [exp_id: string]: {
      [metric_name: string]: {
        step: number;
        value: number;
      }[];
    };
  };

  function groupData(data: InputItem[]): OutputStructure {
    const result: OutputStructure = {};

    data.forEach(({ exp_id, metric_name, step, value }) => {
      if (!result[exp_id]) {
        result[exp_id] = {};
      }
      if (!result[exp_id][metric_name]) {
        result[exp_id][metric_name] = [];
      }
      result[exp_id][metric_name].push({ step, value });
    });

    console.log('Grouped data:', result);

    return result;
  }

  const rawData: InputItem[] = (data ?? []) as InputItem[];
  const grouped = groupData(rawData);

  return (
    <div>
      <AreaChart
        width={1000}
        height={350}
        data={
          exp && metric && grouped[exp] && grouped[exp][metric]
            ? grouped[exp][metric]
            : []
        }
        margin={{
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        }}
      >
        <XAxis dataKey="step" />
        <YAxis />
        <Area dataKey="value" stroke="#043111" fill="#1fe25a" />
        <Tooltip />
      </AreaChart>
    </div>
  );
}

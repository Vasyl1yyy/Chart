import { useState } from 'react';
import ChartOne from '../components/ChartOne';
import { useStore } from '../store/state';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function PageCharts() {
  const data = useStore((state) => state.data);
  const clear = useStore((state) => state.clearData);
  const [expId, setExpId] = useState('exp_1');
  const [metricId, setMetricId] = useState('metric_1');

  return (
    <div className="flex flex-col items-center bg-neutral-900 p-4 rounded-xl">
      <h1 className="text-2xl mb-4">Charts Page</h1>
      <div className="flex gap-4 mb-4">
        <Select onValueChange={setExpId}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="experiment" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-800 text-white">
            <SelectItem value="exp_1">experiment 1</SelectItem>
            <SelectItem value="exp_2">experiment 2</SelectItem>
            <SelectItem value="exp_3">experiment 3</SelectItem>
            <SelectItem value="exp_4">experiment 4</SelectItem>
            <SelectItem value="exp_5">experiment 5</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setMetricId}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="metric" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-800 text-white">
            <SelectItem value="metric_1">metric 1</SelectItem>
            <SelectItem value="metric_2">metric 2</SelectItem>
            <SelectItem value="metric_3">metric 3</SelectItem>
            <SelectItem value="metric_4">metric 4</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <ChartOne data={data} exp={expId} metric={metricId} />
      </div>
      <button
        onClick={clear}
        className="bg-red-500 text-white p-2 rounded-xl hover:shadow-md/20 hover:bg-red-300 transition duration-300 shadow-red-500"
      >
        Clear File
      </button>
    </div>
  );
}

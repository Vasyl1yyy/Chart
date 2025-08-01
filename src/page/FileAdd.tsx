import { useState } from 'react';
import { useStore } from '../store/state';
import { parseCSV } from '../utils/papaparse';

export default function FileAdd() {
  const setData = useStore((state) => state.setData);
  const [file, setFile] = useState<File | null>(null);

  const handleAddFile = () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const getFileContent = parseCSV(text);
      if (getFileContent.data && getFileContent.data.length > 0) {
        const data = getFileContent.data
          .map((item: any) => ({
            id: Number(item[0]),
            exp_id: item[1],
            metric_name: item[2],
            step: Number(item[3]),
            value: Number(item[4]),
          }))
          .filter((item: any) => item.id !== 0);
        console.log('Parsed data:', data);
        setData(data);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col items-center bg-neutral-900 p-4 rounded-xl">
      <p className="mb-4">Click the button below to add a file CSV.</p>

      <div>
        <input
          type="file"
          accept=".csv"
          className="p-2 bg-neutral-800 text-emerald-50 rounded-xl"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <button
          onClick={handleAddFile}
          className="bg-emerald-50 text-neutral-950 p-2 rounded-xl ml-2 hover:shadow-md/20 hover:bg-emerald-300 transition duration-300 shadow-emerald-500"
        >
          Add File
        </button>
      </div>
    </div>
  );
}

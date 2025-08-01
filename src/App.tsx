import { useEffect } from 'react';
import FileAdd from './page/FileAdd';
import PageCharts from './page/PageCharts';
import { useStore } from './store/state';

function App() {
  const data = useStore((state) => state.data);
  useEffect(() => {
    console.log('Loaded data from zustand:', useStore.getState().data);
  }, []);
  return (
    <div className="flex bg-neutral-950 text-emerald-50 h-screen justify-center items-center">
      {data ? <PageCharts /> : <FileAdd />}
    </div>
  );
}

export default App;

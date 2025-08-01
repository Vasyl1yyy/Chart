import Papa from 'papaparse';

export const parseCSV = (csvString: string) => {
  const results = Papa.parse(csvString);

  return results;
};

import { Language } from "../_components/LanguageList";

export const sortingLanguages = (data: Language[]) => {
  const sortedData = [...data].sort((a, b) => b.lines - a.lines);

  const totalLines = sortedData.reduce((total, item) => total + item.lines, 0);

  return sortedData.map(item => ({
    ...item,
    percentage: parseFloat(((item.lines / totalLines) * 100).toFixed(2)),
  }));
};

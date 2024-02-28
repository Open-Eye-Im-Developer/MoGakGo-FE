import { Language } from "../_components/LanguageList";

export const sortingLanguages = (data: Language[]) => {
  const sortedData = [...data].sort((a, b) => b.byteSize - a.byteSize);

  const totalLines = sortedData.reduce(
    (total, item) => total + item.byteSize,
    0,
  );

  return sortedData.map(item => ({
    ...item,
    percentage: parseFloat(((item.byteSize / totalLines) * 100).toFixed(2)),
  }));
};

export const getLanguageLogo: { [key: string]: string } = {
  TypeScript: "/images/TSIcon.webp",
  JavaScript: "/images/JSIcon.webp",
  Java: "/images/Java.webp",
  CSS: "/images/CSSIcon.webp",
  Python: "/images/Python.webp",
};

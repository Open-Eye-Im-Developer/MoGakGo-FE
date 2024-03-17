export const generateQueryString = (
  query: (number | string | undefined)[][],
) => {
  return query
    .filter(([, value]) => value !== undefined)
    .map(q => q.join("="))
    .join("&");
};

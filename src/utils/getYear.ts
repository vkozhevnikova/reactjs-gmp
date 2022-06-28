export const getYear = (date: string) => {
  const dateFormat = new Date(date);

  return dateFormat.getFullYear();
};

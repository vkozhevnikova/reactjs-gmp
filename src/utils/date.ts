export const getYear = (date: string | Date) => {
  const dateFormat = typeof date === 'string' ? new Date(date) : date;

  return dateFormat.getFullYear();
};

export const getMonth = (date: Date) => date.getMonth();

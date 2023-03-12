export const getCurrentTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthNumber = currentDate.toLocaleString('en-US', { month: 'numeric' });
  const monthChar = currentDate.toLocaleString('en-US', { month: 'long' });
  const date = currentDate.getDate();

  return { year, monthNumber, monthChar, date };
};

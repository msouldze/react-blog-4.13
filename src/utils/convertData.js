export const convertDate = (format) => {
  const date = new Date(Date.parse(format));
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getDate()
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
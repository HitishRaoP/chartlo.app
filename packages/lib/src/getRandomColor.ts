export const getRandomColor = (): string => {
  const letters = 'CDEF'; // Using only the higher range of hex values for lighter colors
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

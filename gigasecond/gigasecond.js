const GIGASECOND = Math.pow(10, 12)

export const gigasecond = (date) => {
  return new Date(date.getTime() + GIGASECOND)
};

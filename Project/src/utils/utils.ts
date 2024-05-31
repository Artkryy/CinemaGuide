export const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} ч ${remainingMinutes} мин`;
};

export const firstCharToUpperCase = (str = ''): string => {
  const firstChar = str.charAt(0);
  const upperFirstChar = firstChar.toUpperCase();
  const restOfString = str.slice(1)
  return `${upperFirstChar}${restOfString}`
}

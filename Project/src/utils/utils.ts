export const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} ч ${remainingMinutes} мин`;
};

export const firstCharToUpperCase = (str = ""): string => {
  const firstChar = str.charAt(0);
  const upperFirstChar = firstChar.toUpperCase();
  const restOfString = str.slice(1);
  return `${upperFirstChar}${restOfString}`;
};

export const returnFirstCharToUpperCase = (
  name: string,
  surname: string
): string => {
  const firstCharName = name.charAt(0).toUpperCase();
  const firstCharSurname = surname.charAt(0).toUpperCase();
  return `${firstCharName}${firstCharSurname}`;
};

export const replaceWatchWithEmbed = (url: string): string => {
  const urlParts = url.split("?v=");
  const videoId = urlParts[1];
  return `https://www.youtube.com/embed/${videoId}`;
};

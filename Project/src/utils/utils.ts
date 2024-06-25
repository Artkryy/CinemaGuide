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

export const replaceLanguageName = (languageCode: string): string => {
  const languageDict: { [key: string]: string } = {
    en: "English",
    ru: "Русский",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    it: "Italiano",
    zh: "中文",
    ja: "日本語",
    ko: "한국어",
    pt: "Português",
    ar: "العربية",
    hi: "हिन्दी",
    tr: "Türkçe",
  };

  return languageDict[languageCode] || languageCode;
}

export const formatWithSpaces = (numberStr: string): string => {
  if (!numberStr) {
    return ''
  }

  numberStr = numberStr.replace(/\s+/g, '');
  const formattedNumber = numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return formattedNumber;
}

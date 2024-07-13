export const countParagraphs = (text: string): number => {
  const paragraphsCount = text
    .split(/\n\s*/)
    .filter((paragraph) => paragraph.trim().length > 0).length;

  return paragraphsCount;
};

export const countWords = (text: string): number => {
  const emptyString = "";

  if (text === emptyString) {
    return 0;
  }

  const wordsCount = text.split(" ").filter((word) => word.length > 0).length;

  return wordsCount;
};

export const countCharacters = (text: string): number => {
  const charactersCount = text.length;

  return charactersCount;
};

export const getShortWords = (text: string, length: number = 4): number => {
  const emptyString = "";

  if (text === emptyString) {
    return 0;
  }
  const textWords = text
    .split(" ")
    .filter((word) => word.length <= length).length;

  return textWords;
};

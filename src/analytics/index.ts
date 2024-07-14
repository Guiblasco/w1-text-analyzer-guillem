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

export const listShortWords = (text: string): string => {
  const lengthWord = 4;
  const listWords = text
    .split(" ")
    .filter((shortWord) => shortWord.length <= lengthWord);
  return listWords.join(",");
};

export const getPalindrome = (text: string): string => {
  const emptyString = "";

  if (text === emptyString) {
    return "Isn't Palindrome";
  }
  const splitedPhrase = text.split(" ").join("").toLocaleLowerCase();
  const splitedReversePhrase = splitedPhrase
    .split("")
    .reverse()
    .join("")
    .toLocaleLowerCase();

  return splitedPhrase === splitedReversePhrase
    ? "Is Palindrome"
    : "Isn't Palindrome";
};

export const getFrequenceWords = (
  text: string,
  frequenceWord: string
): number => {
  const newLocal = "";
  if (text === newLocal) {
    return 0;
  }

  const wordCount = text
    .split(" ")
    .filter(
      (word) => word.toLowerCase() === frequenceWord.toLocaleLowerCase()
    ).length;

  return wordCount;
};
export const getReversedText = (text: string): string => {
  if (text === "") {
    return "";
  }

  const splitedReversePhrase = text
    .split("")
    .reverse()
    .join("")
    .toLocaleLowerCase();

  return splitedReversePhrase;
};
export const getReversedWords = (text: string): string => {
  const lengthWord = 5;
  const listWords = text
    .split(" ")
    .filter((shortWord) => shortWord.length <= lengthWord)
    .reverse();

  return listWords.join(",");
};

export const getSnakeCaseText = (text: string): string => {
  if (text === "") {
    return "";
  }
  const snakeText = text.split(" ").join("_");
  return snakeText;
};
export const getKebabCaseText = (text: string): string => {
  if (text === "") {
    return "";
  }
  const kebabCaseText = text.split(" ").join("-");
  return kebabCaseText;
};

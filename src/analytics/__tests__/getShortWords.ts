import { getShortWords } from "../index.js";

const test1 = (): void => {
  console.log("should return 0 when function recive empty string ");

  const shortWord = "";
  const shortWordsCount = getShortWords(shortWord);
  const expectedShortWord = 0;

  if (shortWordsCount === expectedShortWord) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};

const test2 = (): void => {
  console.log("should be return number of shorts words");

  const shortWord = "hola como estas giliiii";
  const shortWordsCount = getShortWords(shortWord);
  const expectedShortWord = 2;

  if (shortWordsCount === expectedShortWord) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};

test1();
test2();

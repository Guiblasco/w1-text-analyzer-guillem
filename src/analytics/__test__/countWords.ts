import { countWords } from "../index.js";

const test1 = (): void => {
  console.log("countWords function case 0");

  const word = "";
  const wordsCount = countWords(word);
  const expectedReturnWord = 0;

  if (wordsCount === expectedReturnWord) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};

const test2 = (): void => {
  console.log("countWords function case 3");

  const words = "hola como estas";
  const wordsCount = countWords(words);
  const expecedWord = 3;

  if (wordsCount === expecedWord) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};

test1();
test2();

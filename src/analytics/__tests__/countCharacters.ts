import { countCharacters } from "../index.js";

const test1 = (): void => {
  console.log("countCharacters Function test 1");

  const wordsCount = "";
  const charactersCount = countCharacters(wordsCount);
  const expectedResult = 0;

  if (charactersCount === expectedResult) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};

const test2 = (): void => {
  console.log("countCharacters Function test 3");

  const wordsCount = "hola como estas";
  const charactersCount = countCharacters(wordsCount);
  const expectedResult = 15;

  if (charactersCount === expectedResult) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};
test1();
test2();

import { getReversedText } from "../index.js";

const test1 = (): void => {
  console.log(
    "\n Should be return an empty string if an empty string is given"
  );

  const emptyString = "";
  const reversedWords = getReversedText(emptyString);
  const expectedResult = emptyString;

  if (reversedWords === expectedResult) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};
const test2 = (): void => {
  console.log("\n Should be return a string with reversed words");

  const text = "Hola";
  const reversedWords = getReversedText(text);
  const expectedResult = "aloh";

  if (reversedWords === expectedResult) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};
test1();
test2();

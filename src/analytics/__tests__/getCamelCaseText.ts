import { getCamelCaseText } from "../index.js";

const test1 = (): void => {
  console.log(
    "\nShould be returns an empty string if an empty string is given"
  );

  const emptyString = "";
  const snakeText = getCamelCaseText(emptyString);
  const expectedResult = emptyString;

  if (snakeText === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test2 = (): void => {
  console.log("\nShould be returns a string with camelCase format");

  const phrase = "Hola como estas";
  const snakeText = getCamelCaseText(phrase);
  const expectedResult = "HolaComoEstas";

  if (snakeText === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
test1();
test2();

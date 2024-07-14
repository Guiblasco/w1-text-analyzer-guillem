import { getKebabCaseText, getSnakeCaseText } from "../index.js";

const test1 = (): void => {
  console.log(
    "\nShould be returns an empty string if an empty string is given"
  );

  const emptyString = "";
  const kebabCaseText = getKebabCaseText(emptyString);
  const expectedResult = emptyString;

  if (kebabCaseText === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test2 = (): void => {
  console.log("\nShould be returns a string with kebabCase format");

  const phrase = "Hola como estas";
  const kebabCaseText = getKebabCaseText(phrase);
  const expectedResult = "Hola-como-estas";

  if (kebabCaseText === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
test1();
test2();

import { getCensuredText } from "../../analytics/index.js";

const test1 = (): void => {
  console.log(
    "\nShould be returns an empty string if an empty string is given"
  );
  const emptyString = [""];
  const text = "Hola como esta usted colega adios";
  const expectedResult = "";

  const forbidenWordsText = getCensuredText(text, emptyString);

  if (forbidenWordsText === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test2 = (): void => {
  console.log("\nShould be returns text when forbiden words are `****`");
  const forbidenwords = ["hola", "adios", "colega"];
  const text = "Hola como esta usted colega adios";
  const expectedResult = "**** como esta usted **** ****";

  const forbidenWordsText = getCensuredText(text, forbidenwords);

  if (forbidenWordsText === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
test1();
test2();

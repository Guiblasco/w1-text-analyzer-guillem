import { getFrequenceWords } from "../index.js";

const test1 = (): void => {
  console.log("\nShould be returns 0 if word isn't at text");
  const textWord = "Hola";
  const text = "Adios colega";
  const frequenceWordCount = getFrequenceWords(text, textWord);

  if (frequenceWordCount === 0) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test2 = (): void => {
  console.log("\nShould be returns number frequences if word is at text");
  const text = "Hola Hola hola";
  const textWord = "Hola";
  const expectedResult = 3;

  const frequenceWordCount = getFrequenceWords(text, textWord);
  console.log(getFrequenceWords(text, textWord));

  if (frequenceWordCount === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
test1();
test2();

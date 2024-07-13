import { countParagraphs } from "../index.js";

const test1 = (): void => {
  console.log("Should be return 0 paragraph");

  const paragraph = "";
  const expectedParagraphsCount = countParagraphs(paragraph);
  const expectedResult = 0;

  if (expectedParagraphsCount === expectedResult) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};
const test2 = (): void => {
  console.log("Should be return 1 paragraph");

  const paragraph = "hola esto es un parrafo";
  const expectedParagraphsCount = countParagraphs(paragraph);
  const expectedResult = 1;

  if (expectedParagraphsCount === expectedResult) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};
const test3 = (): void => {
  console.log("Should be return number of paragraphs function is given");

  const paragraph = `hola estos es un parrafo
  
  hola esto es otro parrafo
  
  y este es otro`;
  const expectedParagraphsCount = countParagraphs(paragraph);
  const expectedResult = 3;

  if (expectedParagraphsCount === expectedResult) {
    console.log("Test Passed");

    return;
  } else {
    console.log("Test Failed");

    return;
  }
};

test1();
test2();
test3();

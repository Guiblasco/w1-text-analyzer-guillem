import { listShortWords } from "../index.js";

const test1 = (): void => {
  console.log("\nshould returns 0 words if fuction empty string is given");

  const phrase = "";
  const listWords = listShortWords(phrase);
  const expectedResult = 0;

  if (listWords.length === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};

const test2 = (): void => {
  console.log("\nShould return a words list separated with commas");

  const phrase = "Hola que tal estas ornitorrinco";
  const listWords = listShortWords(phrase);
  const expectedResult = "Hola,que,tal";

  if (listWords === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
test1();
test2();

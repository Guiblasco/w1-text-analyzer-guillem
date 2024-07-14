import { getPalindrome } from "../index.js";

const test1 = (): void => {
  console.log(
    "\nshould returns Isn't Palindrome if fuction empty string is given"
  );

  const phrase = "";
  const possiblePalindrome = getPalindrome(phrase);
  const expectedResult = "Isn't Palindrome";

  if (possiblePalindrome === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test2 = (): void => {
  console.log(
    "\nshould returns Is Palindrome if one word is palindrome is given"
  );

  const phrase = "racecar";
  const possiblePalindrome = getPalindrome(phrase);
  const expectedResult = "Is Palindrome";

  if (possiblePalindrome === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test3 = (): void => {
  console.log(
    "\nshould returns Isn't Palindrome if one word is not palindrome is given"
  );

  const phrase = "hola";
  const possiblePalindrome = getPalindrome(phrase);
  const expectedResult = "Isn't Palindrome";

  if (possiblePalindrome === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test4 = (): void => {
  console.log(
    "\nshould returns Isn't Palindrome if one phrase is not palindrome is given"
  );

  const phrase = "hola que tal";
  const possiblePalindrome = getPalindrome(phrase);
  const expectedResult = "Isn't Palindrome";

  if (possiblePalindrome === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
const test5 = (): void => {
  console.log(
    "\nshould returns Is gitPalindrome if one phrase is palindrome is given"
  );

  const phrase = "anita lava la tina";
  const possiblePalindrome = getPalindrome(phrase);
  const expectedResult = "Is gitPalindrome";

  if (possiblePalindrome === expectedResult) {
    console.log("Test Passes");

    return;
  } else {
    console.log("Test Fails");

    return;
  }
};
test1();
test2();
test3();
test4();
test5();

import { capitalize } from "./capitalize";
import { reverseString } from "./reverseString";
import { add, subtract, multiply, divide } from "./calculator";
import { caesarCipher } from "./caesarCipher";
import { analyzeArray } from "./analyzeArray";

test(`Capitalize "hello hello"`, () => {
  expect(capitalize("hello hello")).toMatch("Hello hello");
});

test(`Reverse "Hello"`, () => {
  expect(reverseString("Hello")).toMatch("olleH");
});

test(`Calculator tests`, () => {
  expect(add(1, 2)).toBe(3);
  expect(subtract(10, 6)).toBe(4);
  expect(multiply(2, 6)).toBe(12);
  expect(divide(15.6, 3)).toBe(5.2);
});

test(`Encrpt "I love you, zA!" with shift 1`, () => {
  expect(caesarCipher("I love you, zA!", 1)).toMatch("J mpwf zpv, aB!");
});

test(`Output the average, the min, the max, and the length of [1,8,3,4,2,6]`, () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

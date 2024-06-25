import { stringFunction } from "./helpers/stringFunction";

test('stringFunction generates all combinations for "abc"', () => {
  const input = "abc";
  const expectedOutput = ["abc", "a.bc", "ab.c", "a.b.c"];
  const result = stringFunction(input);
  expect(result).toEqual(expect.arrayContaining(expectedOutput));
  expect(result.length).toBe(expectedOutput.length);
});

test('stringFunction generates all combinations for "abcd"', () => {
  const input = "abcd";
  const expectedOutput = [
    "abcd",
    "a.bcd",
    "ab.cd",
    "abc.d",
    "a.b.cd",
    "a.bc.d",
    "ab.c.d",
    "a.b.c.d",
  ];
  const result = stringFunction(input);
  expect(result).toEqual(expect.arrayContaining(expectedOutput));
  expect(result.length).toBe(expectedOutput.length);
});

test("stringFunction generates all combinations for empty string", () => {
  const input = "";
  const expectedOutput = [""];
  const result = stringFunction(input);
  expect(result).toEqual(expectedOutput);
});

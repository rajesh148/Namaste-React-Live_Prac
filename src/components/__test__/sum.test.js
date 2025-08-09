import { sum } from "../Sum";

test("Should be calculate sum of two numbers", () => {
  const result = sum(3, 5);

  expect(result).toBe(8);
});

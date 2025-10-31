import { sum } from "../sum";

test("some function should calculate the sum of two numbers", () => {
  const results = sum(1, 2);
  //Assertion
  expect(results).toBe(3);
});

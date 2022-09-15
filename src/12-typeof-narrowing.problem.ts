import { expect, it } from "vitest";

// How can we use typeof operator here to know what is being given?
const coerceAmount = (amount: number | { amount: number }) => { };

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html#handbook-content

import { expect, it } from "vitest";

// It can be hard to know what error type we will get, it can be anything. So how can we solve this?
const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    return e.message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});

// https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript

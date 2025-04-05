import { describe, expect, test } from "vitest";
import { addGreetToMsg } from "../src";

describe("Greet test", () => {
  test("should add `Hello` in the message `TS SDK` -- Hello! TS SDK", () => {
    const greetHello = addGreetToMsg("Hello! ");
    const message = "TS SDK";
    const greetMsg = greetHello(message);

    const expected = "Hello! TS SDK";
    expect(greetMsg).toEqual(expected);
  });
});

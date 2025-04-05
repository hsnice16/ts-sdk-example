import { MsgFunction } from "../types.js";

export { addGreetToMsg };

/**
 *
 * @summary Get a function to add a greeting to a message
 * @param {string} greet The greeting to add to the message
 * @returns Function
 */
function addGreetToMsg(greet: string): MsgFunction {
  return function (message: string): string {
    return greet + message;
  };
}

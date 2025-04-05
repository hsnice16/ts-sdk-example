# TypeScript SDK Example

[![npm version](https://img.shields.io/npm/v/ts-sdk-example.svg)](https://www.npmjs.com/package/ts-sdk-example)

The TypeScript SDK example has been written for the _The right way to build a TypeScript SDK_ blog.

## Installation

```shell
npm install ts-sdk-example
```

## Usage

You can use the `addGreetToMsg` function to get a function that you can call to add that particular greeting to every message, you call that function with.

```ts
import { addGreetToMsg } from "ts-sdk-example";

const greetHello = addGreetToMsg("Hello! ");
const message = "TS SDK";
const greetMsg = greetHello(message);

console.log(greetMsg);

// Hello! TS SDK
```

See the function code [here](./src/utils/greet.ts) to check its implementation.

## See also

TypeDocs - [here](https://hsnice16.github.io/ts-sdk-example/)

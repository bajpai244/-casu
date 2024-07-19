# Casu

<img src="./assets/logo.png" style="width:150px;border-radius:100%"/>

Casu is a typescript client implementation for [espresso]("https://www.espressosys.com") sequencer, it allows you talk with an espresso sequencer node in a type safe, reliable manner.

> ⚠️ Casu is currently in a very experimental phase, though it can still be used, expect a lot of upcoming changes! Expect a beta release soon!

## What can I build with casu?

- A fullblown rollup leveraging Espresso
- An Espresso block builder
- indexer
- bots
- various data dashboards!

## Example

Submitting a transaction for sequencing:

```typescript
import { config } from "dotenv";

import { Sequencer } from "../src";

config();

const main = async () => {
  const NODE_URL = process.env.NODE_URL;
  if (!NODE_URL) {
    throw new Error("NODE_URL is not set");
  }

  const API_VERSION = process.env.API_VERSION;
  if (!API_VERSION) {
    throw new Error("API_VERSION is not set");
  }

  const sequencer = new Sequencer(NODE_URL, { apiVersion: API_VERSION });

  console.log("submitting transaction ...");
  const tx = {
    from: "0xabcdef",
    value: "0x123456",
    data: "x0abcdef123456",
  };
  const txPayloadBase64 = Buffer.from(JSON.stringify(tx)).toString("base64");

  console.log(
    "tx:",
    await sequencer.submitTransaction({
      namespace: 0,
      payload: txPayloadBase64,
    }),
  );
};
```

Read sequencer Status

```typescript
import { config } from "dotenv";

import { Sequencer } from "./src";

config();

const main = async () => {
  const NODE_URL = process.env.NODE_URL;
  if (!NODE_URL) {
    throw new Error("NODE_URL is not set");
  }

  const API_VERSION = process.env.API_VERSION;
  if (!API_VERSION) {
    throw new Error("API_VERSION is not set");
  }

  const sequencer = new Sequencer(NODE_URL, { apiVersion: API_VERSION });

  // Status related data
  console.log("block height", await sequencer.getBlockHeight());

  console.log("success rate", await sequencer.getSuccessRate());

  console.log(
    "time since last decide",
    await sequencer.getTimeSinceLastDecide(),
  );

  // long output, feel free to uncomment, use for getting Promethues metrics
  //   console.log("metrics", await sequencer.getMetrics());
};

main();
```

## API Coverage

Casu is in very early stage, and support for more APIs is coming soon!

| API Suite Name   | Coverage Status                                   |
| ---------------- | ------------------------------------------------- |
| Status API       | ![✔️](https://img.shields.io/badge/covered-green) |
| Catchup Ability  | ⚠️ Coming soon                                    |
| Availability API | ⚠️ Coming soon                                    |
| Node API         | ⚠️ Coming soon                                    |
| State API        | ⚠️ Coming soon                                    |
| Events API       | ⚠️ Coming soon                                    |
| Submit API       | ![✔️](https://img.shields.io/badge/covered-green) |

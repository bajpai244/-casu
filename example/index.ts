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

  console.log("checking status API ...");

  console.log("block height", await sequencer.getBlockHeight());
  console.log("success rate", await sequencer.getSuccessRate());
  console.log(
    "time since last decide",
    await sequencer.getTimeSinceLastDecide(),
  );

  // long output, feel free to uncomment
  //   console.log("metrics", await sequencer.getMetrics());

  console.log("submitting transaction ...");
  const tx = {
    from: "0xabcdef",
    value: "0x123456",
    data: "x0abcdef123456",
  };
  const txBuffer = Buffer.from(JSON.stringify(tx)).toString("base64");

  console.log(
    "tx:",
    await sequencer.submitTransaction({
      namespace: 0,
      payload: txBuffer,
    }),
  );
};

main();

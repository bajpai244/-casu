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

import type {
  Hex,
  TaggedBase64,
  Transaction,
  TransactionTagPrefix,
} from "../types";

export type SequencerConfig = {
  apiVersion: string;
};

export interface ISequencer {
  // Status APIs
  getBlockHeight(): Promise<Hex>;
  getSuccessRate(): Promise<number>;
  getTimeSinceLastDecide(): Promise<number>;
  getMetrics(): Promise<string>;

  // Submit API
  submitTransaction(
    tx: Transaction,
  ): Promise<TaggedBase64<TransactionTagPrefix>>;

  getApiVersion(): string;

  getNodeUrl(): string;
  getApiVersion(): string;

  setNodeUrl(nodeUrl: string): void;
  setApiVersion(apiVersion: string): void;
}

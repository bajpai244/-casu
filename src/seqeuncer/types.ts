import type { Hex } from "../types";

export type SequencerConfig = {
  apiVersion: string;
};

export interface ISequencer {
  // Status APIs
  getBlockHeight(): Promise<Hex>;
  getSuccessRate(): Promise<number>;
  getTimeSinceLastDecide(): Promise<number>;
  getMetrics(): Promise<string>;

  getApiVersion(): string;

  getNodeUrl(): string;
  getApiVersion(): string;

  setNodeUrl(nodeUrl: string): void;
  setApiVersion(apiVersion: string): void;
}

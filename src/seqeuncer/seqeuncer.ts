import type { Hex } from "../types";
import { SequencerApiClient } from "./api/client";
import { Endpoints } from "./api/endpoints";
import type { ISequencerApiClient } from "./api/types";
import type { ISequencer, SequencerConfig } from "./types";

export class Sequencer implements ISequencer {
  apiClient: ISequencerApiClient;

  constructor(
    nodeURL: string,
    config: SequencerConfig = {
      apiVersion: "v0",
    },
  ) {
    this.apiClient = new SequencerApiClient(nodeURL, config.apiVersion);
  }

  async getBlockHeight(): Promise<Hex> {
    const response = await this.apiClient.get<number>(
      Endpoints.SequencerEndpoints.blockHeight,
    );

    return `0x${response.data.toString(16)}`;
  }

  async getSuccessRate(): Promise<number> {
    const response = await this.apiClient.get<number>(
      Endpoints.SequencerEndpoints.successRate,
    );
    return response.data;
  }

  async getTimeSinceLastDecide(): Promise<number> {
    const response = await this.apiClient.get<number>(
      Endpoints.SequencerEndpoints.timeSinceLastDecide,
    );
    return response.data;
  }

  async getMetrics(): Promise<string> {
    const response = await this.apiClient.get<string>(
      Endpoints.SequencerEndpoints.metrics,
    );
    return response.data;
  }

  getNodeUrl(): string {
    return this.apiClient.getNodeUrl();
  }

  getApiVersion(): string {
    return this.apiClient.getApiVersion();
  }

  setNodeUrl(nodeUrl: string): void {
    this.apiClient.setNodeUrl(nodeUrl);
  }

  setApiVersion(apiVersion: string): void {
    this.apiClient.setApiVersion(apiVersion);
  }
}

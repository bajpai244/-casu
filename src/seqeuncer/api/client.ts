import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { ISequencerApiClient } from "./types";

export class SequencerApiClient implements ISequencerApiClient {
  private client: AxiosInstance;
  private nodeUrl: string;
  private apiVersion: string;

  constructor(nodeURL: string, apiVersion: string) {
    this.nodeUrl = nodeURL;
    this.apiVersion = apiVersion;

    const baseUrl = `${nodeURL}/${apiVersion}`;

    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config);
  }

  public post<T>(
    url: string,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.client.post<T>(url, data, config);
  }

  public put<T>(
    url: string,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.client.put<T>(url, data, config);
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(url, config);
  }

  public getNodeUrl(): string {
    return this.nodeUrl;
  }

  public getApiVersion(): string {
    return this.apiVersion;
  }

  public setNodeUrl(nodeUrl: string): void {
    this.nodeUrl = nodeUrl;
    this.client.defaults.baseURL = `${nodeUrl}/${this.apiVersion}`;
  }

  public setApiVersion(apiVersion: string): void {
    this.apiVersion = apiVersion;
    this.client.defaults.baseURL = `${this.nodeUrl}/${apiVersion}`;
  }
}

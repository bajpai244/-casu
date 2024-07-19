import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface ISequencerApiClient {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

  post<T>(
    url: string,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;

  put<T>(
    url: string,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;

  delete<T>(
    URL: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;

  getNodeUrl(): string;
  getApiVersion(): string;

  setNodeUrl(nodeUrl: string): void;
  setApiVersion(apiVersion: string): void;
}

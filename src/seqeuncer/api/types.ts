import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface ISequencerApiClient {
      get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

       post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>

       put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>

       delete<T>(URL: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
}

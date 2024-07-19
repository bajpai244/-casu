import  axios from "axios"
import type {AxiosInstance, AxiosRequestConfig,AxiosResponse} from "axios"
import type { ISequencerApiClient } from "./types";

export class SequencerApiClient implements ISequencerApiClient {
    private client: AxiosInstance

    constructor(baseUrl: string){
        this.client = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.get<T>(url, config);
      }

      public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.post<T>(url, data, config);
      }

      public put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.put<T>(url, data, config);
      }

      public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.delete<T>(url, config);
      }
}

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { MarketStackResponse } from './MarketStackResponse';

export class MarketStackApi {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.API_ENDPOINT,
      timeout: 1000,
      headers: { 'X-Custom-Header': 'foobar' },
    });
  }

  async sendGetRequest(params): Promise<MarketStackResponse> {
    const result = await this.axios.request<
      unknown,
      AxiosResponse<MarketStackResponse>
    >({
      method: 'GET',
      params: {
        access_key: process.env.API_KEYS,
        ...params,
      },
    });
    return result.data;
  }

  async fetchTickerEOD({
    ticker,
    date = 'latest',
  }: {
    ticker: string;
    date: string;
  }): Promise<MarketStackResponse> {
    return this.sendGetRequest({ ticker, date });
  }
}

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { MarketStackRequest } from 'src/utils';
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
  /**
   * Facade of axios data api
   * @param params parameters that will be passed to marketstack
   * @returns data from API
   */
  async sendGetRequest({ url, params }): Promise<MarketStackResponse> {
    const result = await this.axios.request<
      unknown,
      AxiosResponse<MarketStackResponse>
    >({
      method: 'GET',
      url,
      params: {
        access_key: process.env.API_KEY,
        ...params,
      },
    });
    return result.data;
  }
  /**
   * Fetch ticker information
   * @param params parameters of request
   * @returns information with data tickers
   * @see https://marketstack.com/documentation
   */
  async fetchTickerEOD(
    params: MarketStackRequest,
  ): Promise<MarketStackResponse> {
    return this.sendGetRequest({ url: '/eod', params });
  }
}

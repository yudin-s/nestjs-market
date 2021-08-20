export class MarketStackRequest {
  access_key?: string;
  symbols?: string;
  exchange?: string;
  sort?: string;
  date_from?: string;
  date_to?: string;
  limit?: number;
  offset?: number;
}

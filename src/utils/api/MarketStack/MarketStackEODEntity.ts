export class MarketStackEODEntity {
  open: number;
  hight: number;
  close: number;
  low: number;

  split_factor: number;
  adj_high: number;
  adj_low: number;
  adj_close: number;
  adj_open: number;
  adj_volume: number;

  exchange: string;
  date: string;
  symbol: string;
}

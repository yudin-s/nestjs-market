import { MarketStackRequest } from 'src/utils';

export class StockFindOptionalDto {
  exchange: MarketStackRequest['exchange'];
  sort: MarketStackRequest['sort'];
  date_from: MarketStackRequest['date_from'];
  date_to: MarketStackRequest['date_to'];
  limit: MarketStackRequest['limit'];
  offset: MarketStackRequest['offset'];
}

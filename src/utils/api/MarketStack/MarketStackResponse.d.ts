import { MarketStackEODEntity } from './MarketStackEODEntity';
import { MarketStackPagination } from './MarketStackPagination';

export class MarketStackResponse {
  pagination: MarketStackPagination;
  data: [MarketStackEODEntity];
}

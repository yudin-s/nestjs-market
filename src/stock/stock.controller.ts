import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MarketStackApi, MarketStackResponse } from 'src/utils';
import { StockFindOptionalDto } from './stock.dto';

@Controller('stock')
export class StockController {
  @Post(':symbols')
  async findOne(
    @Param('symbols') symbols: string,
    @Body() stockParams: StockFindOptionalDto,
  ): Promise<MarketStackResponse> {
    const api = new MarketStackApi();
    return await api.fetchTickerEOD({ symbols, ...stockParams });
  }
}

import { Controller, Get, Param } from '@nestjs/common';

@Controller('stock')
export class StockController {
  @Get(':ticker')
  async findOne(@Param('ticker') ticker: string): Promise<any> {}
}

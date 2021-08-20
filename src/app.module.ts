import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { StockController } from './stock/stock.controller';


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, StockController],
  providers: [AppService],
})
export class AppModule {}

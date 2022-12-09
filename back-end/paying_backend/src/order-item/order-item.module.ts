import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemService } from './order-item.service';
import { OrderItemController } from './order-item.controller';
import { OrderItem } from '../entities/order-item.entity';

import { OptionItemModule } from '../option-item/option-item.module';
@Module({
  imports: [TypeOrmModule.forFeature([OrderItem]), OptionItemModule],
  
  providers: [OrderItemService],
  controllers: [OrderItemController],
  exports : [OrderItemService],
})
export class OrderItemModule {}

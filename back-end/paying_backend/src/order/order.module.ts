import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from '../entities/order.entity'


import { FrancchiModule } from '../francchi/francchi.module';
import { OrderItemModule } from '../order-item/order-item.module';
import { ChatBackEndModule } from '../chatBackEnd/alarm.module';
@Module({
  imports: [TypeOrmModule.forFeature([Order]), FrancchiModule, OrderItemModule, ChatBackEndModule],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}

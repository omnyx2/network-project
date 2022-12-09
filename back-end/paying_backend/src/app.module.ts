import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UsersModule } from './users/users.module';
import { FrancchiModule } from './francchi/francchi.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { OptionItemModule } from './option-item/option-item.module';
import { WorkingdateModule } from './workingdate/workingdate.module';
import { ProductOptionModule } from './product-option/product-option.module';


import { User } from './entities/user.entity';
import { Francchi } from './entities/francchi.entity';
import { WorkingDate } from './entities/workingdate.entity';
import { Product } from './entities/product.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { OptionItem } from './entities/option-item.entity';
import { ProductOption } from './entities/product-option.entity';

import {DataSource} from 'typeorm'

import { ChatBackEndModule } from './chatBackEnd/alarm.module';



@Module({
    imports: [ChatBackEndModule, 
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'pw123',
            database: 'test',
            entities: [User, Francchi, Product, Order, OrderItem, OptionItem, WorkingDate, ProductOption], // 사용할 entity의 클래스명을 넣어둔다.
            synchronize: true, // false로 해두는 게 안전하다.
          }),
          UsersModule,
          FrancchiModule,
          ProductModule,
          OrderModule,
          OrderItemModule,
          OptionItemModule,
          WorkingdateModule,
          ProductOptionModule,
        ],
    providers: [],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
  }

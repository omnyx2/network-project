import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from '../entities/product.entity'

import { ProductOptionModule } from '../product-option/product-option.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), ProductOptionModule],
  providers: [ProductService],
  controllers: [ProductController],
  exports:[ProductService]
})
export class ProductModule {}

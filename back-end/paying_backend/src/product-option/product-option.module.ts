import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOptionService } from './product-option.service';
import { ProductOptionController } from './product-option.controller';
import { ProductOption } from '../entities/product-option.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ProductOption])],
  providers: [ProductOptionService],
  controllers: [ProductOptionController],
  exports : [ProductOptionService],
})
export class ProductOptionModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionItemService } from './option-item.service';
import { OptionItemController } from './option-item.controller';
import { OptionItem } from '../entities/option-item.entity';


@Module({
  imports: [TypeOrmModule.forFeature([OptionItem])],
  providers: [OptionItemService],
  controllers: [OptionItemController],
  exports : [OptionItemService],
})
export class OptionItemModule {}

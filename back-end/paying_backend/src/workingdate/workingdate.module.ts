import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkingDateController } from './workingdate.controller';
import { WorkingDateService } from './workingdate.service';
import { WorkingDate} from '../entities/workingdate.entity';


@Module({
  imports : [TypeOrmModule.forFeature([WorkingDate])],
  controllers: [WorkingDateController],
  providers: [WorkingDateService]
})
export class WorkingdateModule {}

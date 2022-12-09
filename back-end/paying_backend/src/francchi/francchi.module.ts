import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrancchiService } from './francchi.service';
import { ProductModule } from '../product/product.module';

import { FrancchiController } from './francchi.controller';
import { Francchi } from '../entities/francchi.entity';



@Module({    
    imports: [TypeOrmModule.forFeature([Francchi]),ProductModule ],
    providers: [FrancchiService],
    controllers: [FrancchiController],
    exports: [FrancchiService]
})

export class FrancchiModule {}

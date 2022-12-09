import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ProductOption} from '../entities/product-option.entity'

@Injectable()
export class ProductOptionService {
    constructor(
        @InjectRepository(ProductOption) private productOptionRepository:Repository<ProductOption>, )
        {this.productOptionRepository = productOptionRepository}
    
    findAll(): Promise<ProductOption[]>{
        return this.productOptionRepository.find();
    }

    findOne(id : number): Promise<ProductOption>{
        return this.productOptionRepository.findOneBy({id:id})
    }

    async updateProductOption(id:number, productOption:ProductOption):Promise<void>{
        await this.productOptionRepository.update(id, productOption);
    }

    async saveProductOption(productOption: ProductOption): Promise<void> {
        await this.productOptionRepository.save(productOption);
    }

    async deleteProductOption(id :number): Promise<void>{
        await this.productOptionRepository.delete({id:id})
    }

}

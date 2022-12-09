import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Product} from '../entities/product.entity'

import { ProductOptionService } from '../product-option/product-option.service';
import { ProductOption } from '../entities/product-option.entity'
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private productRepository:Repository<Product>, 
        private productOptionService:ProductOptionService
        )
        {
            this.productRepository = productRepository;
            this.productOptionService = productOptionService;
        }
    
    findAll(): Promise<Product[]>{
        return this.productRepository.find();
    }

    findOne(id : number): Promise<Product>{
        return this.productRepository.findOneBy({id:id})
    }
    findbyFrancchiId(francchi_id:number):Promise<Product[]>{
        return this.productRepository.find({
            where: {"francchi_id":francchi_id} //["주문 대기", "조리 시작", "조리 완료", "주문 취소", "주문 완료"]
            
        })
    }
    async updateProduct(id:number, product:Product):Promise<void>{
        await this.productRepository.update(id, product);
    }



    async findId(name:string, price:number):Promise<Product[]>{
        return this.productRepository.find({
            where: {
                "name":name,
                "price":price
            }
        })
    }
    productOptionCreate(productOption:ProductOption, product_id : number){
        productOption.product_id = product_id
        return productOption
    }
    async saveProductOption(productOption:ProductOption, product_id:number):Promise<void>{
        await this.productOptionService.saveProductOption(this.productOptionCreate(productOption, product_id) )
    }
    async saveProduct(product: Product): Promise<void> {
        await this.productRepository.save(product);

        try{
            let x = (await this.findId(product.name, product.price))
            let len = (await x.length)
            //console.log("productid : ", x[len-1].id)
            //console.log("optionItems : ",product.options )
            for(let i=0;i<product.options.length;i++)
                await this.saveProductOption(product.options[i], x[len-1].id)
        }catch(err){}
    }

    async deleteProduct(id :number): Promise<void>{
        await this.productRepository.delete({id:id})
    }

}

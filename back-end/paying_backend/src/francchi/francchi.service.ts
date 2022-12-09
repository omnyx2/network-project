import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Francchi} from '../entities/francchi.entity'

import { Product } from '../entities/product.entity'
import { ProductService } from '../product/product.service';

@Injectable()
export class FrancchiService {
    constructor(
        @InjectRepository(Francchi) private francchiRepository:Repository<Francchi>, private productService:ProductService )
        {
            this.francchiRepository = francchiRepository;
            this.productService = productService;
        }
    
    findAll(): Promise<Francchi[]>{
        return this.francchiRepository.find();
    }

    findOne(id : number): Promise<Francchi>{
        return this.francchiRepository.findOneBy({id:id})
    }

    async updateFrancchi(id:number, francchi:Francchi):Promise<void>{
        await this.francchiRepository.update(id, francchi);
    }

    productCreate(product:Product, francchi_id : number){
        product.francchi_id = francchi_id
        return product
    }

    async saveProduct(product:Product, francchi_id :number):Promise<void>{
        await this.productService.saveProduct( this.productCreate(product, francchi_id) )
    }

    async saveFrancchi(francchi: Francchi): Promise<void> {
        await this.francchiRepository.save(francchi);
        try{
        for(let i=0;i<francchi.products.length;i++)
            await this.saveProduct(francchi.products[i], francchi.id)
        }catch(err){}
        
    }
    async createFrancchi(francchis: Francchi[]): Promise<void> {
        try{
        for(let i=0;i<francchis.length;i++)
            await this.saveFrancchi(francchis[i])
        }catch(err){}
        
    }
    async deleteFrancchi(id :number): Promise<void>{
        await this.francchiRepository.delete({id:id})
    }



}

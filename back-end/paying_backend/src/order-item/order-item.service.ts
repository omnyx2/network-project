import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from '../entities/order-item.entity'

import { OptionItemService } from '../option-item/option-item.service';
import { OptionItem } from '../entities/option-item.entity'


@Injectable()
export class OrderItemService {
    constructor(
        @InjectRepository(OrderItem) private orderItemRepository:Repository<OrderItem>, 
        private optionItemService:OptionItemService
        )
        {
            this.orderItemRepository = orderItemRepository
            this.optionItemService = optionItemService
        }
    
    findAll(): Promise<OrderItem[]>{
        return this.orderItemRepository.find();
    }

    findOne(id : number): Promise<OrderItem>{
        return this.orderItemRepository.findOneBy({id:id})
    }

    async findId(name:string, price:number):Promise<OrderItem[]>{
        return this.orderItemRepository.find({
            where: {
                "name":name,
                "price":price
            }
        })
    }

    async updateOrderItem(id:number, orderItem:OrderItem):Promise<void>{
        await this.orderItemRepository.update(id, orderItem);
    }
    optionItemCreate(optionItem:OptionItem, orderItem_id : number){
        optionItem.orderItem_id = orderItem_id
        console.log("orderItem", orderItem_id)
        return optionItem
    }
    async saveOptionItem(optionItem:OptionItem, orderItem_id:number):Promise<void>{
        await this.optionItemService.saveOptionItem(this.optionItemCreate(optionItem, orderItem_id) )
    }
    async saveOrderItem(orderItem: OrderItem): Promise<void> {
        let {id, ...x } = orderItem
        await this.orderItemRepository.save(x);

        try{
            let x = (await this.findId(orderItem.name, orderItem.price))
            let len = (await x.length)
            //console.log("orderItemid : ", x[len-1].id)
            //console.log("optionItems : ",orderItem.options )
            for(let i=0;i<orderItem.options.length;i++)
                await this.saveOptionItem(orderItem.options[i], x[len-1].id)
        }catch(err){}
    }

    async deleteOrderItem(id :number): Promise<void>{
        await this.orderItemRepository.delete({id:id})
    }

}

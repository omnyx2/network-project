import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Order} from '../entities/order.entity'

import {OrderItem} from '../entities/order-item.entity'

import { FrancchiService } from 'src/francchi/francchi.service';
import { OrderItemService } from 'src/order-item/order-item.service';

import { AlarmGateway } from '../chatBackEnd/alarm.gateway';
import { identity } from 'rxjs';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private orderRepository:Repository<Order>, 
        private orderItemService:OrderItemService,
        private francchiService:FrancchiService,
        private gd:AlarmGateway
        )
        {
            this.orderRepository = orderRepository;
            this.orderItemService = orderItemService;
        }
    
    findAll(): Promise<Order[]>{
        return this.orderRepository.find();
    }

    findOne(id : number): Promise<Order>{
        return this.orderRepository.findOneBy({id:id})
    }

    findbyFrancchiId(francchi_id:number):Promise<Order[]>{
        return this.orderRepository.find({
            where: {"francchi_id":francchi_id} //["주문 대기", "조리 시작", "조리 완료", "주문 취소", "주문 완료"]
            
        })
    }
    filterOrder(francchi_id:number):Promise<Order[]>{
        console.log("play")
        //return this.orderRepository
        //    .createQueryBuilder("order")
        //    .where("order.francchi_id =:francchi_id", {francchi_id:francchi_id})
        //    .where("order.orderState IN (:...states)", {states:["주문대기중"]})
        //    .getRawMany();
        return this.orderRepository.find({
            where: {"francchi_id":francchi_id} //["주문 대기", "조리 시작", "조리 완료", "주문 취소", "주문 완료"]    
        })
    }
    async updateOrder(id:number, order:Order):Promise<void>{
        await this.orderRepository.update(id, order);
    }

    async findId(user_id:number, francchi_id:number):Promise<Order[]>{
        return this.orderRepository.find({
            where: {
                "user_id":user_id,
                "francchi_id":francchi_id
            }
        })
    }

    orderItemCreate(orderItem:OrderItem, order_id : number){
        orderItem.order_id = order_id
        return orderItem
    }
    async saveOrderItem(orderItem:OrderItem, order_id:number):Promise<void>{
        await this.orderItemService.saveOrderItem(this.orderItemCreate(orderItem, order_id))
    }
    async saveOrder(order: Order): Promise<void> {
        if(order.orderItems.length==0) return;
        order.orderTimeAt = new Date(Date.now())
        await this.orderRepository.save(order);
        //console.log("order : ", order)
        let x = (await this.findId(order.user_id, order.francchi_id))
        let len = (await x.length)
        //console.log("data : ",x[len-1].id)
        //console.log("do")

        console.log(order.francchi);
        this.gd.server.emit('getMessage',{ "message":"new order in " + (await this.francchiService.findOne(order.francchi_id)).name});
        try{

            for(let i=0;i<order.orderItems.length;i++)
                await this.saveOrderItem(order.orderItems[i], x[len-1].id)
        }catch(err){console.log(err)}
    }
    async postOrder(order: Order): Promise<void> {

        order.orderTimeAt = new Date(Date.now())
        await this.orderRepository.save(order);
    }
    async createOrder(orders: Order[]): Promise<void>{
        try{
            for(let i=0;i<orders.length;i++)
                await this.saveOrder(orders[i])
        }catch(err){}
    }

    async deleteOrder(id :number): Promise<void>{
        await this.orderRepository.delete({id:id})
    }

    //async newOrder(s):Promixe<void>{

    //}
}

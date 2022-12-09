import { Controller, Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {OrderService} from './order.service';

import {Order} from '../entities/order.entity';
import {OrderItem} from '../entities/order-item.entity'
import { OrderItemService } from 'src/order-item/order-item.service';
@Controller('order')
export class OrderController {
    constructor(private orderService:OrderService){
        this.orderService = orderService;
    }
    @Get('list')
    async findAll(): Promise<Order[]>{
        const orderList = await this.orderService.findAll();
        console.log("try")
        return Object.assign({
            data:orderList,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }

    @Get(':id')
    async findOne(@Param('id') id:number):Promise<Order>{
        const foundOrder = await this.orderService.findOne(+id);
        return Object.assign({
            data: foundOrder,
            statuscode : 200,
            statusMsg : `data find success`
        });
    }
    @Get('/francchi/:id')
    async findOrderbyFrancchi(@Param('id') id:number): Promise<Order[]>{
        const orderList = await this.orderService.findbyFrancchiId(+id);
        return Object.assign({
            data:orderList,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }
    @Get('/filter/:id')
    async filterOrder(@Param('id') id:number): Promise<Order[]>{
        const orderList = await this.orderService.filterOrder(+id);
        return Object.assign({
            data:orderList,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }

    //revise
    @Patch(':id')
    async updateOrder(@Param('id') id:number, @Body() order:Order): Promise<string>{
        console.log("order patch")
        console.log("order",id)
        
        const {orderItems, ...obj} = order

        console.log(obj)

        await this.orderService.updateOrder(id, order);

        return Object.assign({
            data: {...order},
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }

    /*
    @Post('create')
    async createOrder(@Body() orders : Order[]){
        await Promise.all(
            orders.map(or => this.saveOrder(or))
            );
            return Object.assign({
                data:{orders},
                statusCode:200,
                statusMsg:'save successfully'
            })
    }
    */
    @Post()
    async saveOrder(@Body() order:Order):Promise<string>{
        console.log("post order ", order)
        await this.orderService.saveOrder(order);
        return Object.assign({
            data:{...order},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }
    @Post(':francchi_id')
    async saveOrder2(@Param('francchi_id') francchi_id:number, @Body() order:Order):Promise<string>{
        console.log("post order2 ", order);
        for(let i=0;i<order.orderItems.length;i++)
            console.log(i + "th orderItem option : " + order.orderItems[i].options);
        order.francchi_id = francchi_id;
        await this.orderService.saveOrder(order);
        return Object.assign({
            data:{...order},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }
    @Post('post/:id')
    async postOrder(@Body() order:Order):Promise<string>{
        await this.orderService.postOrder(order);
        return Object.assign({
            data:{...order},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }
    @Delete(':id')
    async deleteOrder(@Param('id') id:string):Promise<string>{
        await this.orderService.deleteOrder(+id);
        return Object.assign({
            data:{orderId:id},
            statusCode:200,
            statusMsg:'deleted successfully'
        })
    }
}

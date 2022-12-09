import { Controller, Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {OrderItemService} from './order-item.service';
import {OrderItem} from '../entities/order-item.entity';

@Controller('order-item')
export class OrderItemController {
    constructor(private orderItemService:OrderItemService){
        this.orderItemService = orderItemService;
    }
    @Get('list')
    async findAll(): Promise<OrderItem[]>{
        const orderItemList = await this.orderItemService.findAll();
        return Object.assign({
            data:orderItemList,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }
    @Get(':id')
    async findOne(@Param('id') id:number):Promise<OrderItem>{
        const foundOrderItem = await this.orderItemService.findOne(+id);
        return Object.assign({
            data: foundOrderItem,
            statuscode : 200,
            statusMsg : `data find success`
        });
    }

    //revise
    @Patch(':id')
    async updateOrderItem(@Param('id') id:number, @Body() orderItem:OrderItem): Promise<string>{
        await this.orderItemService.updateOrderItem(id, orderItem);
        return Object.assign({
            data: {...orderItem},
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }

    @Post()
    async saveOrderItem(@Body() orderItem:OrderItem):Promise<string>{
        await this.orderItemService.saveOrderItem(orderItem);
        return Object.assign({
            data:{...orderItem},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }

    @Delete(':id')
    async deleteOrderItem(@Param('id') id:string):Promise<string>{
        await this.orderItemService.deleteOrderItem(+id);
        return Object.assign({
            data:{orderItemId:id},
            statusCode:200,
            statusMsg:'deleted successfully'
        })
    }



}

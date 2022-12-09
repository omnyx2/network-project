import { Controller, Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {OptionItemService} from './option-item.service';
import {OptionItem} from '../entities/option-item.entity';

@Controller('option-item')
export class OptionItemController {
    constructor(private optionItemService:OptionItemService){
        this.optionItemService = optionItemService;
    }
    @Get('list')
    async findAll(): Promise<OptionItem[]>{
        const optionItemList = await this.optionItemService.findAll();
        return Object.assign({
            data:optionItemList,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }
    @Get(':id')
    async findOne(@Param('id') id:number):Promise<OptionItem>{
        const foundOptionItem = await this.optionItemService.findOne(+id);
        return Object.assign({
            data: foundOptionItem,
            statuscode : 200,
            statusMsg : `data find success`
        });
    }

    //revise
    @Patch(':id')
    async updateOptionItem(@Param('id') id:number, @Body() optionItem:OptionItem): Promise<string>{
        await this.optionItemService.updateOptionItem(id, optionItem);
        return Object.assign({
            data: {...optionItem},
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }

    @Post()
    async saveOptionItem(@Body() optionItem:OptionItem):Promise<string>{
        await this.optionItemService.saveOptionItem(optionItem);
        return Object.assign({
            data:{...optionItem},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }

    @Delete(':id')
    async deleteOptionItem(@Param('id') id:string):Promise<string>{
        await this.optionItemService.deleteOptionItem(+id);
        return Object.assign({
            data:{optionItemId:id},
            statusCode:200,
            statusMsg:'deleted successfully'
        })
    }



}

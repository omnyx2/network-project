import { Controller, Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {ProductOptionService} from './product-option.service';
import {ProductOption} from '../entities/product-option.entity';

@Controller('product-option')
export class ProductOptionController {
    constructor(private optionItemService:ProductOptionService){
        this.optionItemService = optionItemService;
    }
    @Get('list')
    async findAll(): Promise<ProductOption[]>{
        const optionItemList = await this.optionItemService.findAll();
        return Object.assign({
            data:optionItemList,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }
    @Get(':id')
    async findOne(@Param('id') id:number):Promise<ProductOption>{
        const foundProductOption = await this.optionItemService.findOne(+id);
        return Object.assign({
            data: foundProductOption,
            statuscode : 200,
            statusMsg : `data find success`
        });
    }

    //revise
    @Patch(':id')
    async updateProductOption(@Param('id') id:number, @Body() optionItem:ProductOption): Promise<string>{
        await this.optionItemService.updateProductOption(id, optionItem);
        return Object.assign({
            data: {...optionItem},
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }

    @Post()
    async saveProductOption(@Body() optionItem:ProductOption):Promise<string>{
        await this.optionItemService.saveProductOption(optionItem);
        return Object.assign({
            data:{...optionItem},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }

    @Delete(':id')
    async deleteProductOption(@Param('id') id:string):Promise<string>{
        await this.optionItemService.deleteProductOption(+id);
        return Object.assign({
            data:{optionItemId:id},
            statusCode:200,
            statusMsg:'deleted successfully'
        })
    }



}

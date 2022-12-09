import { Controller, Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {ProductService} from './product.service';
import {Product} from '../entities/product.entity';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){
        this.productService = productService;
    }
    @Get('list')
    async findAll(): Promise<Product[]>{
        const productList = await this.productService.findAll();
        return Object.assign({
            data:productList,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }
    @Get(':id')
    async findOne(@Param('id') id:number):Promise<Product>{
        const foundProduct = await this.productService.findOne(+id);
        return Object.assign({
            data: foundProduct,
            statuscode : 200,
            statusMsg : `data find success`
        });
    }
    @Get('/francchi/:id')
    async findProductbyFrancchi(@Param('id') id:number): Promise<Product[]>{
        const orderList = await this.productService.findbyFrancchiId(+id);
        return Object.assign({
            data:orderList,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }

    //revise
    @Patch(':id')
    async updateProduct(@Param('id') id:number, @Body() product:Product): Promise<string>{
        await this.productService.updateProduct(id, product);
        return Object.assign({
            data: {...product},
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }

    @Post()
    async saveProduct(@Body() product:Product):Promise<string>{
        await this.productService.saveProduct(product);
        return Object.assign({
            data:{...product},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id:string):Promise<string>{
        await this.productService.deleteProduct(+id);
        return Object.assign({
            data:{productId:id},
            statusCode:200,
            statusMsg:'deleted successfully'
        })
    }


}

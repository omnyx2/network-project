import { Controller, Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {FrancchiService} from './francchi.service';
import {Francchi} from '../entities/francchi.entity';



@Controller('francchi')
export class FrancchiController {
    constructor(private francchiService:FrancchiService){
        this.francchiService = francchiService;
    }
    @Get('list')
    async findAll(): Promise<Francchi[]>{
        const francchiList = await this.francchiService.findAll();
        return Object.assign({
            data:francchiList,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }
    @Get(':id')
    async findOne(@Param('id') id:number):Promise<Francchi>{
        const foundFrancchi = await this.francchiService.findOne(+id);
        return Object.assign({
            data: {
                id : id,
                name : foundFrancchi.name
            },
            statuscode : 200,
            statusMsg : `data find success`
        });
    }

    //revise
    @Patch(':id')
    async updateFrancchi(@Param('id') id:number, @Body() francchi:Francchi): Promise<string>{
        await this.francchiService.updateFrancchi(id, francchi);
        return Object.assign({
            data: {...francchi},
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }

    //parseFrancchi(francchi:Francchi){    
    //    return francchi.products.map(p=>this.francchiService.saveProduct(p))
    //}
    @Post()
    async saveFrancchi(@Body() francchi:Francchi):Promise<string>{
        //await this.francchiService.saveFrancchi(francchi);
        await this.francchiService.saveFrancchi(francchi) 
 
        return Object.assign({
            data:{...francchi},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }

    @Post('create')
    async createFrancchi(@Body() francchis : Francchi[]){
        await this.francchiService.createFrancchi(francchis) 

            return Object.assign({
                data:{francchis},
                statusCode:200,
                statusMsg:'save successfully'
            })
    }

    @Delete(':id')
    async deleteFrancchi(@Param('id') id:string):Promise<string>{
        await this.francchiService.deleteFrancchi(+id);
        return Object.assign({
            data:{francchiId:id},
            statusCode:200,
            statusMsg:'deleted successfully'
        })
    }

    //parseFrancchi(francchiDto:FrancchiDto){
    //    const {product, ...obj} = francchiDto
    //    return obj
    //}
/*
    @Post('new')
    async newFrancchi(@Body() francchiDto:FrancchiDto):Promise<string>{
        await Promise.all([
            this.francchiService.saveFrancchi( (this.parseFrancchi(francchiDto))  ),
            fetch(url2),
            ...
          ]);
        return Object.assign({
            data1:{ ...this.parse(francchiDto)  },
            data2:{...francchiDto.product},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }

*/

}

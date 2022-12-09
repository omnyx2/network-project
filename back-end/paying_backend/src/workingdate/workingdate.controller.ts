import { Controller, Body, Post, Delete, Param, Get } from '@nestjs/common';

import {WorkingDateService} from './workingdate.service';
import {WorkingDateDto, WorkingDateJson} from './workingdate.dto';

@Controller('workingdate')
export class WorkingDateController {
    constructor(private workingdateService:WorkingDateService){
        this.workingdateService = workingdateService;
    }

    @Get('/francchi/:id')
    async findOrderbyFrancchi(@Param('francchi_id') francchi_id:number): Promise<WorkingDateJson>{
        const data = await this.workingdateService.getByFrancchiId(francchi_id);
        return Object.assign({
            data:data,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }

    @Post()
    async saveWorkingDate(@Body() workingdatejson : WorkingDateJson):Promise<string>{
        let workingdatedto = workingdatejson.data;
        let francchi_id = workingdatejson.francchi_id;
        
        await this.workingdateService.deleteWorokingData(francchi_id);
        await this.workingdateService.saveWorkingDateDto(workingdatedto, francchi_id) ;
 
        return Object.assign({
            data:{...workingdatejson},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }
    @Delete("delete/:francchi_id")
    async deleteByFrancchi_id(@Param('francchi_id') francchi_id:number):Promise<string>{
        this.workingdateService.deleteWorokingData(francchi_id)
        return Object.assign({
            data:francchi_id,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }
     

}

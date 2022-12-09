import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {WorkingDate} from '../entities/workingdate.entity'
import {WorkingDateDto} from './workingdate.dto'

@Injectable()
export class WorkingDateService {
    constructor(
        @InjectRepository(WorkingDate) private workingdateRepository:Repository<WorkingDate>)
        {
            this.workingdateRepository = workingdateRepository;
        }

    //get
    async getByFrancchiId(francchi_id : number):Promise<WorkingDateDto[]>{
        return this.WD2WDTdo( await this.findByFrancchiId(francchi_id));
    }

    WD2WDTdo(workingdate:WorkingDate[]):WorkingDateDto[]{

        let len = workingdate.length;
        var wdt = [];
        for(let i=0;i<len;i++){
            wdt.push(new WorkingDateDto())
            wdt[i].days = []
            if(workingdate[i].w1) {wdt[i].days.push("월");}
            if(workingdate[i].w2) {wdt[i].days.push("화");}
            if(workingdate[i].w3) {wdt[i].days.push("수");}
            if(workingdate[i].w4) {wdt[i].days.push("목");}
            if(workingdate[i].w5) {wdt[i].days.push("금");}
            if(workingdate[i].w6) {wdt[i].days.push("토");}
            if(workingdate[i].w7) {wdt[i].days.push("일");}
            wdt[i].nowAndThen = []
            wdt[i].nowAndThen.push(workingdate[i].start);
            wdt[i].nowAndThen.push(workingdate[i].end);
        }
        return wdt;
    }

    async findByFrancchiId(francchi_id : number): Promise<WorkingDate[]>{
        return this.workingdateRepository.find({
            where: {"francchi_id":francchi_id} //["주문 대기", "조리 시작", "조리 완료", "주문 취소", "주문 완료"]
        })
    }
    async deleteAll(francchi_id :number){
        let x = ( await this.findByFrancchiId(francchi_id))
        for(let i=0;i<x.length;i++){

        }
        
    }

    //delete
    async deleteWorokingData(francchi_id :number): Promise<void>{
        await this.workingdateRepository.delete({francchi_id:francchi_id})
    }

    //post
    async saveWorkingDateDto(workingdatedto: WorkingDateDto[], francchi_id:number): Promise<void> {
        let x = await(this.WDTdo2WD(workingdatedto, francchi_id) );
        for(let i=0;i<x.length;i++)
        {
            await this.saveWorkingDate(x[i]);
        }
        
    }

    async saveWorkingDate(workingdate: WorkingDate): Promise<void> {
        await this.workingdateRepository.save(workingdate);
        
    }


    
    WDTdo2WD(workingdatedto:WorkingDateDto[], francchi_id:number):WorkingDate[]{
        let len = workingdatedto.length;
        var wd = [];
        for(let i=0;i<len;i++){
            wd.push(new WorkingDate())
            //let type = workingdatedto[i].type
            for(let j=0;j<workingdatedto[i].days.length;j++)
                {
                    let s = workingdatedto[i].days[j];
                    if(s == "월") {wd[i].w1 = true;}
                    if(s == "화") wd[i].w2 = true;
                    if(s == "수") wd[i].w3 = true;
                    if(s == "목") wd[i].w4 = true;
                    if(s == "금") wd[i].w5 = true;
                    if(s == "토") wd[i].w6 = true;
                    if(s == "일") wd[i].w7 = true;
                }
            
            wd[i].francchi_id = francchi_id
            //console.log(1)
            wd[i].start = workingdatedto[i].nowAndThen[0]
            wd[i].end = workingdatedto[i].nowAndThen[1]
            //console.log(2)
        }
        return wd;
        
    }
}

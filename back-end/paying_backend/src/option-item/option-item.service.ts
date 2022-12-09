import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {OptionItem} from '../entities/option-item.entity'

@Injectable()
export class OptionItemService {
    constructor(
        @InjectRepository(OptionItem) private optionItemRepository:Repository<OptionItem>, )
        {this.optionItemRepository = optionItemRepository}
    
    findAll(): Promise<OptionItem[]>{
        return this.optionItemRepository.find();
    }

    findOne(id : number): Promise<OptionItem>{
        return this.optionItemRepository.findOneBy({id:id})
    }

    async updateOptionItem(id:number, optionItem:OptionItem):Promise<void>{
        await this.optionItemRepository.update(id, optionItem);
    }

    async saveOptionItem(optionItem: OptionItem): Promise<void> {
        let {id, ...x} = optionItem
        await this.optionItemRepository.save(x);
    }

    async deleteOptionItem(id :number): Promise<void>{
        await this.optionItemRepository.delete({id:id})
    }

}

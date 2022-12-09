import { Repository } from 'typeorm';
import { OptionItem } from '../entities/option-item.entity';
export declare class OptionItemService {
    private optionItemRepository;
    constructor(optionItemRepository: Repository<OptionItem>);
    findAll(): Promise<OptionItem[]>;
    findOne(id: number): Promise<OptionItem>;
    updateOptionItem(id: number, optionItem: OptionItem): Promise<void>;
    saveOptionItem(optionItem: OptionItem): Promise<void>;
    deleteOptionItem(id: number): Promise<void>;
}

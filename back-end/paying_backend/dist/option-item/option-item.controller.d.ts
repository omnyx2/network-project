import { OptionItemService } from './option-item.service';
import { OptionItem } from '../entities/option-item.entity';
export declare class OptionItemController {
    private optionItemService;
    constructor(optionItemService: OptionItemService);
    findAll(): Promise<OptionItem[]>;
    findOne(id: number): Promise<OptionItem>;
    updateOptionItem(id: number, optionItem: OptionItem): Promise<string>;
    saveOptionItem(optionItem: OptionItem): Promise<string>;
    deleteOptionItem(id: string): Promise<string>;
}

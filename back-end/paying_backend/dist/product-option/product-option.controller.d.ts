import { ProductOptionService } from './product-option.service';
import { ProductOption } from '../entities/product-option.entity';
export declare class ProductOptionController {
    private optionItemService;
    constructor(optionItemService: ProductOptionService);
    findAll(): Promise<ProductOption[]>;
    findOne(id: number): Promise<ProductOption>;
    updateProductOption(id: number, optionItem: ProductOption): Promise<string>;
    saveProductOption(optionItem: ProductOption): Promise<string>;
    deleteProductOption(id: string): Promise<string>;
}

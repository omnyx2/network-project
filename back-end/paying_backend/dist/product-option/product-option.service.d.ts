import { Repository } from 'typeorm';
import { ProductOption } from '../entities/product-option.entity';
export declare class ProductOptionService {
    private productOptionRepository;
    constructor(productOptionRepository: Repository<ProductOption>);
    findAll(): Promise<ProductOption[]>;
    findOne(id: number): Promise<ProductOption>;
    updateProductOption(id: number, productOption: ProductOption): Promise<void>;
    saveProductOption(productOption: ProductOption): Promise<void>;
    deleteProductOption(id: number): Promise<void>;
}

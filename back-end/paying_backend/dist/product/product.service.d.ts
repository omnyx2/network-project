import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { ProductOptionService } from '../product-option/product-option.service';
import { ProductOption } from '../entities/product-option.entity';
export declare class ProductService {
    private productRepository;
    private productOptionService;
    constructor(productRepository: Repository<Product>, productOptionService: ProductOptionService);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    findbyFrancchiId(francchi_id: number): Promise<Product[]>;
    updateProduct(id: number, product: Product): Promise<void>;
    findId(name: string, price: number): Promise<Product[]>;
    productOptionCreate(productOption: ProductOption, product_id: number): ProductOption;
    saveProductOption(productOption: ProductOption, product_id: number): Promise<void>;
    saveProduct(product: Product): Promise<void>;
    deleteProduct(id: number): Promise<void>;
}

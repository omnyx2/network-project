import { ProductService } from './product.service';
import { Product } from '../entities/product.entity';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    findProductbyFrancchi(id: number): Promise<Product[]>;
    updateProduct(id: number, product: Product): Promise<string>;
    saveProduct(product: Product): Promise<string>;
    deleteProduct(id: string): Promise<string>;
}

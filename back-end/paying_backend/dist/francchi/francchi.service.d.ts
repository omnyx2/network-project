import { Repository } from 'typeorm';
import { Francchi } from '../entities/francchi.entity';
import { Product } from '../entities/product.entity';
import { ProductService } from '../product/product.service';
export declare class FrancchiService {
    private francchiRepository;
    private productService;
    constructor(francchiRepository: Repository<Francchi>, productService: ProductService);
    findAll(): Promise<Francchi[]>;
    findOne(id: number): Promise<Francchi>;
    updateFrancchi(id: number, francchi: Francchi): Promise<void>;
    productCreate(product: Product, francchi_id: number): Product;
    saveProduct(product: Product, francchi_id: number): Promise<void>;
    saveFrancchi(francchi: Francchi): Promise<void>;
    createFrancchi(francchis: Francchi[]): Promise<void>;
    deleteFrancchi(id: number): Promise<void>;
}

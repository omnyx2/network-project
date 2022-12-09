import { Product } from './product.entity';
export declare class ProductOption {
    id: number;
    product_id: number;
    title: string;
    price: number;
    product: Product;
}

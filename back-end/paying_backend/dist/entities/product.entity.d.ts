import { Francchi } from './francchi.entity';
import { ProductOption } from './product-option.entity';
export declare class Product {
    id: number;
    francchi_id: number;
    name: string;
    price: number;
    isOrderable: boolean;
    tags: string;
    beforeTags: string;
    francchi: Francchi;
    options: ProductOption[];
}

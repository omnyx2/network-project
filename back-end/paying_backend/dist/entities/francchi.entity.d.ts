import { Product } from './product.entity';
import { Order } from './order.entity';
import { WorkingDate } from './workingdate.entity';
export declare class Francchi {
    id: number;
    name: string;
    addr: string;
    phone_number: number;
    full_checker: boolean;
    type: string;
    workingdates: WorkingDate[];
    products: Product[];
    orders: Order[];
}

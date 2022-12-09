import { Order } from './order.entity';
import { OptionItem } from './option-item.entity';
export declare class OrderItem {
    id: number;
    order_id: number;
    name: string;
    price: number;
    count: number;
    isOrderable: boolean;
    tags: string;
    beforeTags: string;
    order: Order;
    options: OptionItem[];
}

import { OrderItem } from './order-item.entity';
export declare class OptionItem {
    id: number;
    orderItem_id: number;
    title: string;
    count: number;
    orderItem: OrderItem;
}

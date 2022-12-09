import { OrderItemService } from './order-item.service';
import { OrderItem } from '../entities/order-item.entity';
export declare class OrderItemController {
    private orderItemService;
    constructor(orderItemService: OrderItemService);
    findAll(): Promise<OrderItem[]>;
    findOne(id: number): Promise<OrderItem>;
    updateOrderItem(id: number, orderItem: OrderItem): Promise<string>;
    saveOrderItem(orderItem: OrderItem): Promise<string>;
    deleteOrderItem(id: string): Promise<string>;
}

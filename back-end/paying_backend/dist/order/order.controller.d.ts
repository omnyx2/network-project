import { OrderService } from './order.service';
import { Order } from '../entities/order.entity';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    findOrderbyFrancchi(id: number): Promise<Order[]>;
    filterOrder(id: number): Promise<Order[]>;
    updateOrder(id: number, order: Order): Promise<string>;
    saveOrder(order: Order): Promise<string>;
    saveOrder2(francchi_id: number, order: Order): Promise<string>;
    postOrder(order: Order): Promise<string>;
    deleteOrder(id: string): Promise<string>;
}

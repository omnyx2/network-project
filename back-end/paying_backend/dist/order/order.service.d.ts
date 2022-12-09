import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { FrancchiService } from 'src/francchi/francchi.service';
import { OrderItemService } from 'src/order-item/order-item.service';
import { AlarmGateway } from '../chatBackEnd/alarm.gateway';
export declare class OrderService {
    private orderRepository;
    private orderItemService;
    private francchiService;
    private gd;
    constructor(orderRepository: Repository<Order>, orderItemService: OrderItemService, francchiService: FrancchiService, gd: AlarmGateway);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    findbyFrancchiId(francchi_id: number): Promise<Order[]>;
    filterOrder(francchi_id: number): Promise<Order[]>;
    updateOrder(id: number, order: Order): Promise<void>;
    findId(user_id: number, francchi_id: number): Promise<Order[]>;
    orderItemCreate(orderItem: OrderItem, order_id: number): OrderItem;
    saveOrderItem(orderItem: OrderItem, order_id: number): Promise<void>;
    saveOrder(order: Order): Promise<void>;
    postOrder(order: Order): Promise<void>;
    createOrder(orders: Order[]): Promise<void>;
    deleteOrder(id: number): Promise<void>;
}

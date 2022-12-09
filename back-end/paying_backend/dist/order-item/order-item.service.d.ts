import { Repository } from 'typeorm';
import { OrderItem } from '../entities/order-item.entity';
import { OptionItemService } from '../option-item/option-item.service';
import { OptionItem } from '../entities/option-item.entity';
export declare class OrderItemService {
    private orderItemRepository;
    private optionItemService;
    constructor(orderItemRepository: Repository<OrderItem>, optionItemService: OptionItemService);
    findAll(): Promise<OrderItem[]>;
    findOne(id: number): Promise<OrderItem>;
    findId(name: string, price: number): Promise<OrderItem[]>;
    updateOrderItem(id: number, orderItem: OrderItem): Promise<void>;
    optionItemCreate(optionItem: OptionItem, orderItem_id: number): OptionItem;
    saveOptionItem(optionItem: OptionItem, orderItem_id: number): Promise<void>;
    saveOrderItem(orderItem: OrderItem): Promise<void>;
    deleteOrderItem(id: number): Promise<void>;
}

import { User } from './user.entity';
import { Francchi } from './francchi.entity';
import { OrderItem } from './order-item.entity';
export declare class Order {
    id: number;
    user_id: number;
    francchi_id: number;
    orderCustomerName: string;
    orderTotPrice: number;
    orderTimeAt: Date;
    isCancled: false;
    orderPickUpType: string;
    orderRequirements: string;
    orderState: string;
    user: User;
    francchi: Francchi;
    orderItems: OrderItem[];
}

import { Entity, Column,JoinColumn, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from './user.entity'
import { Francchi} from './francchi.entity'
import { OrderItem } from './order-item.entity'

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id : number;
    @Column()
    francchi_id : number;

    @Column({default : "Name"})
    orderCustomerName : string
    @Column({default : 0})
    orderTotPrice : number;
    @Column({default : null})
    orderTimeAt : Date; // 나중에 date로 변경 필요
    
    @Column({default:false})
    isCancled: false

    @Column({default : null})
    orderPickUpType : string;
    @Column({default : null})
    orderRequirements : string;
    @Column({default : "주문 대기"})
    orderState : string;

    @ManyToOne(() => User,{nullable:false})
    @JoinColumn({name:'user_id'})
    user: User
    @ManyToOne(() => Francchi, {nullable:false})
    @JoinColumn({name:'francchi_id'})
    francchi: Francchi  
   
    @OneToMany(() => OrderItem, (orderItems) => orderItems.order, {eager:true})
    orderItems: OrderItem[]

}
/*
@ManyToOne(() => User, (user) => user.orders)
user: User
@ManyToOne(() => Francchi, (francchi) => francchi.orders)
francchi: Francchi
*/
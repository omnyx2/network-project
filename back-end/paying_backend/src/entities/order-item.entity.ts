import { Entity, Column,JoinColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Order } from './order.entity'
import { OptionItem } from './option-item.entity'
//1. product - order 다대 다 대응
//2. product 상속? 
//3. 깡구현. <- 일단 이걸로.
@Entity()
export class OrderItem{
    @PrimaryGeneratedColumn()
    id: number;

    //foreign key
    @Column()
    order_id : number;

    @Column()
    name : string;
    @Column()
    price : number
    @Column({default:1})
    count : number;
    @Column({default:true})
    isOrderable:boolean;
    @Column({default:null}) // string list -> string
    tags : string;
    @Column({default:null})
    beforeTags: string

    

    @ManyToOne(() => Order,{nullable:false})
    @JoinColumn({name:'order_id'})
    order: Order

    @OneToMany(() => OptionItem, (options) => options.orderItem, {eager:true})
    options: OptionItem[]

}

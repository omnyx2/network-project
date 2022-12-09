import { Entity, Column,JoinColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { OrderItem } from './order-item.entity'

@Entity()
export class OptionItem{
    @PrimaryGeneratedColumn()
    id: number;

    //foreign key
    @Column()
    orderItem_id : number;

    @Column()
    title : string;
    @Column({default:1})
    count : number;

    

    @ManyToOne(() => OrderItem,{nullable:false})
    @JoinColumn({name:'orderItem_id'})
    orderItem: OrderItem


}

import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import {Product} from './product.entity'
import {Order} from './order.entity'
import {WorkingDate} from './workingdate.entity'

@Entity()
export class Francchi {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name : string;
    @Column({default : "addr"})
    addr : string;
    @Column({default : 0})
    phone_number : number;
    @Column({default : false})
    full_checker : boolean;
    @Column({default : null})
    type : string
    //menu_image - type : image
    //
    //@Column({ default: true })
    //isActive: boolea
    @OneToMany(() => WorkingDate, (workingdates) => workingdates.francchi)
    @JoinColumn()
    workingdates:WorkingDate[]

    @OneToMany(() => Product, (products) => products.francchi,{eager:true})
    products: Product[]
    @OneToMany(() => Order, (orders) => orders.francchi)
    orders: Order[]

}

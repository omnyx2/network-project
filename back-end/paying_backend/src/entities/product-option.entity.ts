import { Entity, Column,JoinColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Product } from './product.entity'

@Entity()
export class ProductOption{
    @PrimaryGeneratedColumn()
    id: number;

    //foreign key
    @Column()
    product_id : number;

    @Column()
    title : string;
    @Column({default : 0})
    price : number;

    


    @ManyToOne(() => Product,{nullable:false})
    @JoinColumn({name:'product_id'})
    product: Product


}

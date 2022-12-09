import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import {Francchi} from './francchi.entity'
import { ProductOption } from './product-option.entity'
@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    francchi_id : number;
    @Column()
    name : string;
    @Column({default : 100})
    price : number;
    @Column({default : true})
    isOrderable : boolean;
    @Column({default:null}) // string list -> string
    tags : string;
    @Column({default:null})
    beforeTags: string
    
    //@ManyToOne(() => Francchi, (francchi) => francchi.products)
    //francchi: Francchi
    @ManyToOne(() => Francchi, {nullable:false})
    @JoinColumn({name:'francchi_id'})
    francchi: Francchi

    @OneToMany(() => ProductOption, (options) => options.product, {eager:true})
    options: ProductOption[]

}

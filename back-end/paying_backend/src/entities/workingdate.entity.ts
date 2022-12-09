import { Entity, Column, PrimaryGeneratedColumn, JoinColumn,ManyToOne } from 'typeorm';
import {Francchi} from './francchi.entity'


@Entity()
export class WorkingDate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    francchi_id : number;

    @Column({default:false}) // Monday
    w1 : boolean;
    @Column({default:false}) 
    w2 : boolean;
    @Column({default:false}) 
    w3 : boolean;
    @Column({default:false}) 
    w4 : boolean;
    @Column({default:false}) 
    w5 : boolean;
    @Column({default:false})
    w6 : boolean;
    @Column({default:false}) 
    w7 : boolean;


    @Column()
    start : Date;
    @Column()
    end : Date;


    @ManyToOne(() => Francchi, {nullable:false})
    @JoinColumn({name:'francchi_id'})
    francchi: Francchi

}
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Order} from './order.entity'


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name : string;

  @OneToMany(() => Order, (orders) => orders.user)
  orders: Order[]
  //@Column({ default: true })
  //isActive: boolean;
}
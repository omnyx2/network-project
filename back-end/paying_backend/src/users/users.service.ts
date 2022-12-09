

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        private dataSource: DataSource
    ) {
        this.usersRepository = usersRepository;
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOneBy({ id:id });
    }

    findId(name:string):Promise<User[]>{
        return this.usersRepository.find({
            where: {
                "name":name
            }
        })
    }
    //수정
    async updateUser(id:number, user:User):Promise<void>{
        await this.usersRepository.update(id, user);
    }
    /*
    async createUser(users: User[]) {
       
        const queryRunner = this.dataSource.createQueryRunner();
        const userRepo = queryRunner.manager.getRepository(User);

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          
          await userRepo.save(users[0]);
          await userRepo.save(users[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          console.log("not wokring", users[0])
          console.log("Error ", err)
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
         
          await queryRunner.release();
        }
      }*/
    async createUser(users: User[]) {
    for(let i =0;i<users.length;i++)
        {
        await this.saveUser(users[i])     
        }
    }  
    async saveUser(user:User):Promise<void>{
        await this.usersRepository.save(user);
    }

    async deleteUser(id: number): Promise<void> {
        await this.usersRepository.delete({id:id});
    }
}
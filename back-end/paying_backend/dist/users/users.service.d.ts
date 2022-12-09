import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UsersService {
    private usersRepository;
    private dataSource;
    constructor(usersRepository: Repository<User>, dataSource: DataSource);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findId(name: string): Promise<User[]>;
    updateUser(id: number, user: User): Promise<void>;
    createUser(users: User[]): Promise<void>;
    saveUser(user: User): Promise<void>;
    deleteUser(id: number): Promise<void>;
}

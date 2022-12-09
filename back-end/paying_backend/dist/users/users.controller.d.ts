import { UsersService } from './users.service';
import { User } from '../entities/user.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findId(name: string): Promise<User[]>;
    updateUser(id: number, user: User): Promise<string>;
    saveUser(user: User): Promise<string>;
    createUser(users: User[]): Promise<string>;
    deleteUser(id: string): Promise<string>;
}

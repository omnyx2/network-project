import { Controller, Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from '../entities/user.entity'
@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){
        this.usersService = usersService;
    }  

    @Get('list')
    async findAll(): Promise<User[]>{
        const userList = await this.usersService.findAll();
        return Object.assign({
            data:userList,
            statusCode:200,
            statusMsg:`data view Success`,
        });
    }

    @Get(':id')
    async findOne(@Param('id') id:number):Promise<User>{
        const foundUser = await this.usersService.findOne(+id);
        return Object.assign({
            data: foundUser,
            statuscode : 200,
            statusMsg : `data find success`
        });
    }

    @Get('findid/:name')
    async findId(@Param('name') name:string):Promise<User[]>{
        const foundUser = await this.usersService.findId(name);
        return Object.assign({
            data: foundUser,
            statuscode : 200,
            statusMsg : `data find success`
        });
    }

    //revise
    @Patch(':id')
    async updateUser(@Param('id') id:number, @Body() user:User): Promise<string>{
        await this.usersService.updateUser(id, user);
        return Object.assign({
            data: {...user},
            statusCode: 200,
            statusMsg: 'update successfully'
        });
    }

    @Post()
    async saveUser(@Body() user:User):Promise<string>{

        await this.usersService.saveUser(user);
        return Object.assign({
            data:{...user},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }
    @Post('create')
    async createUser(@Body() users:User[]):Promise<string>{

        await this.usersService.createUser(users);
        return Object.assign({
            data:{...users},
            statusCode:200,
            statusMsg:'save successfully'
        })
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:string):Promise<string>{
        await this.usersService.deleteUser(+id);
        return Object.assign({
            data:{userId:id},
            statusCode:200,
            statusMsg:'deleted successfully'
        })
    }

}

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service:UsersService){

    }
    @Get()
    async index(){
        return await this.service.findAll();
    }
    @Get(':id')
    async find(@Param('id') id:string){
        return await this.service.findOne(id);
    }

    @Post('create')
    async create(@Body() createUser:RegisterUserDto){
        return await this.service.create(createUser);
    }

    @Put(':id')
    async update(@Param(':id') id:string, @Body()
    updateUserDto:UpdateUserDto){
        return await this.service.update(id,updateUserDto);
    } 
}

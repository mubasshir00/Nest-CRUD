import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/register-user.dto';
import {  UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly model:Model<UserDocument>){

    }
    async findAll():Promise<User[]>{
        return await this.model.find().exec()
    }
    async findOne(id:string):Promise<User>{
        return await this.model.findById(id).exec()
    }
    async create(createUser:RegisterUserDto):Promise<User>{
        return await new this.model({
            ...createUser,
            createdAt:new Date(),
        }).save();
    }
    async update(id:string,updateUserDto:UpdateUserDto):Promise<User>{
        return await this.model.findByIdAndUpdate(id,updateUserDto).exec();
    }
    async delete(id:string):Promise<User>{
        return await this.model.findByIdAndDelete(id).exec();
    }
    async deactive(id:string):Promise<User>{
        const temp = await this.model.findById(id).exec()
        console.log(temp);
        
        return temp;
    }

    
}
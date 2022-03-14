import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import {Model} from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private readonly model:Model<TodoDocument>){

    }

    async findAll():Promise<Todo[]>{
        return await this.model.find().exec()
    }

    async findOne(id:string):Promise<Todo>{
        return await this.model.findById(id).exec();
    }

    async create(createTodoDto:CreateTodoDto):Promise<Todo>{
        return await new this.model({
            ...createTodoDto,
            createdAt:new Date(),
        }).save();
    }

    async update(id:string,updateTodoDto:UpdateTodoDto):Promise<Todo>{
        return await this.model.findByIdAndUpdate(id,updateTodoDto).exec();
    }

    async delete(id:string):Promise<Todo>{
        return await this.model.findByIdAndDelete(id).exec();
    }

    async deactive(id:string):Promise<Todo>{
        const temp =  await this.model.findById(id).exec();
        console.log(temp);
        
        return temp;
    }
}

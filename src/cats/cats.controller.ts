import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { Request } from "express";
import { CatsService } from "./cats.service";
import { CreateCatDto, UpdateCateDto } from "./dto";
import { Cat } from "./interfaces/cat.interface";

@Controller('cats')
export class CatsController {
    constructor(private catsService:CatsService){

    }

    @Post('create')
    async create(@Body() createCatDto:CreateCatDto){
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll():Promise<Cat[]>{
        return this.catsService.findAll();
    }

    @Get(":id")
    findOne(@Param('id') id:string){
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id:string,@Body() updateCateDto:UpdateCateDto){
        return `This action updates a #{id} cate`;
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return `This action removes a #${id} cat`;
    }
}
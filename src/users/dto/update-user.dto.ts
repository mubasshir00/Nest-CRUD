import { BaseUserDto } from "./base-user.dto";

export class UpdateUserDto extends BaseUserDto{
    fullName:{
        firstName:string,
        midName:string,
        lastName:string
    }
    profilePic: string;
}
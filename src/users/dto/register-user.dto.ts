import { BaseUserDto } from "./base-user.dto";

export class RegisterUserDto extends BaseUserDto {
    firstName:string;
    midName:string;
    lastName:string;
    profilePic:string;
    joinedAt:Date;
}
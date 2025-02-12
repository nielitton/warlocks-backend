import { IsNotEmpty } from "class-validator";
import { User } from "../entities/user.entity";

export class UserDto extends User {
    @IsNotEmpty({message: 'Você precisa passar o nome de usuário'})
    name: string;

    @IsNotEmpty({message: 'Você precisa passar o email do usuário'})
    email: string;

    @IsNotEmpty({message: 'Você precisa passar a senha do usuário'})
    password: string;
}
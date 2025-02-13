import { IsNotEmpty } from "class-validator";
import { User } from "../entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";


export class UserDto extends User {
    @ApiProperty({
        example: "Nieliton"
    })
    @IsNotEmpty({message: 'Você precisa passar o nome de usuário'})
    name: string;

    @ApiProperty({
        example: "nieliton@email.com"
    })
    @IsNotEmpty({message: 'Você precisa passar o email do usuário'})
    email: string;

    @ApiProperty({
        example: "senha123"
    })
    @IsNotEmpty({message: 'Você precisa passar a senha do usuário'})
    password: string;
}

export class LoginDto {
    @ApiProperty({
        example: "nieliton@email.com"
    })
    @IsNotEmpty({message: 'Você precisa passar o email do usuário'})
    email: string;

    @ApiProperty({
        example: "senha123"
    })
    @IsNotEmpty({message: 'Você precisa passar a senha do usuário'})
    password: string;
}
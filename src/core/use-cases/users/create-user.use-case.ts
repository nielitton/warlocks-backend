import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { BusinessException } from "src/core/exception/businnes-exception";
import { UserDto } from "src/core/models/dtos/user-dto";
import { UserRepository } from "src/core/repositories/users/users.repository";

@Injectable()
export class CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }
    async execute(data: UserDto) {
        data.password = await bcrypt.hash(data.password, 10)

        const userExists = await this.userRepository.findOne(data.email)

        if (!userExists) {
            return await this.userRepository.create(data);
        }

        throw new BusinessException("Usuário já existe", 409)
    }
}
import { Injectable } from "@nestjs/common";
import { UserDto } from "src/core/models/dtos/user-dto";
import { UserRepository } from "src/core/repositories/users/users.repository";
import * as bcrypt from "bcryptjs";

@Injectable()
export class CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository) {}
    async execute (data: UserDto) {
        data.password = await bcrypt.hash(data.password, 10)

        return await this.userRepository.create(data);
    }
}
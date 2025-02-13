import { Injectable } from "@nestjs/common";
import { UserDto } from "src/core/models/dtos/user-dto";
import { User } from "src/core/models/entities/user.entity";
import { CreateUserUseCase } from "src/core/use-cases/users/create-user.use-case";
import { FindUsersUseCase } from "src/core/use-cases/users/find-users.use-case";

@Injectable()
export class UserService {
    constructor(
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly findUsersUseCase: FindUsersUseCase
    ) {}
    async create (data: UserDto) {
        return await this.createUserUseCase.execute(data);
    }

    async findUsers(): Promise<Partial<User>[]> {
        return await this.findUsersUseCase.execute();
    }
}
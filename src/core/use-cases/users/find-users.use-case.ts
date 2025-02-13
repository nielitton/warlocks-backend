import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/core/repositories/users/users.repository";

@Injectable()
export class FindUsersUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute() {
        return await this.userRepository.findMany();
    }
}
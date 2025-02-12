import { User } from "@prisma/client";
import { UserDto } from "src/core/models/dtos/user-dto";

export abstract class UserRepository {
    abstract create(user: UserDto): Promise<User>;
}
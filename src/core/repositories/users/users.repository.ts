import { UserDto } from "src/core/models/dtos/user-dto";
import { User } from "src/core/models/entities/user.entity";

export abstract class UserRepository {
    abstract create(user: UserDto): Promise<User>;
    abstract findMany(): Promise<Partial<User>[]>
}
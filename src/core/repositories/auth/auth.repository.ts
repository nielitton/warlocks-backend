import { LoginDto, UserDto } from "src/core/models/dtos/user-dto";
import { User } from "src/core/models/entities/user.entity";

export abstract class AuthRepository {
    abstract findUser(email: string): Promise<User | null>;
}
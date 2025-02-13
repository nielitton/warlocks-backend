import { Module, Provider } from "@nestjs/common";
import { RepositoriesModule } from "../repositories/repositories.module";
import { CreateUserUseCase } from "./users/create-user.use-case";
import { FindUsersUseCase } from "./users/find-users.use-case";
import { AuthUserUseCase } from "./auth/auth.use-case";

const User: Provider[] = [
    CreateUserUseCase,
    FindUsersUseCase
]

const Auth: Provider[] = [
    AuthUserUseCase
]

const providers: Provider[] = [
    ...User,
    ...Auth
]

@Module({
    imports: [RepositoriesModule],
    exports: providers,
    providers
})

export class UseCasesModule {}
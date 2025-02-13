import { Module, Provider } from "@nestjs/common";
import { RepositoriesModule } from "../repositories/repositories.module";
import { CreateUserUseCase } from "./users/create-user.use-case";
import { FindUsersUseCase } from "./users/find-users.use-case";
import { AuthUserUseCase } from "./auth/auth.use-case";
import { CreateNotesUseCase } from "./notes/create-notes.use-case";
import { FindAllNotesUseCase } from "./notes/find-all-notes.use-case";

const User: Provider[] = [
    CreateUserUseCase,
    FindUsersUseCase
]

const Notes: Provider[] = [
    CreateNotesUseCase,
    FindAllNotesUseCase
]

const Auth: Provider[] = [
    AuthUserUseCase
]

const providers: Provider[] = [
    ...User,
    ...Auth,
    ...Notes
]

@Module({
    imports: [RepositoriesModule],
    exports: providers,
    providers
})

export class UseCasesModule {}
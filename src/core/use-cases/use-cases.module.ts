import { Module, Provider } from "@nestjs/common";
import { RepositoriesModule } from "../repositories/repositories.module";
import { CreateUserUseCase } from "./users/create-user.use-case";
import { FindUsersUseCase } from "./users/find-users.use-case";
import { AuthUserUseCase } from "./auth/auth.use-case";
import { CreateNotesUseCase } from "./notes/create-notes.use-case";
import { FindAllNotesUseCase } from "./notes/find-all-notes.use-case";
import { UpdateNoteUseCase } from "./notes/update-note.use-case";
import { softDeleteNoteUseCase } from "./notes/soft-delete-notes.use-case";
import { HardDeleteNoteUseCase } from "./notes/hard-delete-note.use-case";
import { FindOneNoteUseCase } from "./notes/find-one-note.use-case";

const User: Provider[] = [
    CreateUserUseCase,
    FindUsersUseCase
]

const Notes: Provider[] = [
    CreateNotesUseCase,
    FindAllNotesUseCase,
    UpdateNoteUseCase,
    softDeleteNoteUseCase,
    HardDeleteNoteUseCase,
    FindOneNoteUseCase
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
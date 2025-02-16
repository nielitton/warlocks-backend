import { Module, Provider } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { AuthRepository } from "./auth/auth.repository";
import { PrismaAuthRepository } from "./auth/prisma-auth.repositorie";
import { NotesRepository } from "./notes/notes.repositorie";
import { PrismaNotesRepository } from "./notes/prima-notes.repository";
import { PrismaUserRepository } from "./users/prisma-users.repositorie";
import { UserRepository } from "./users/users.repository";

const providers: Provider[] = [
    {
        provide: UserRepository,
        useClass: PrismaUserRepository
    },
    {
        provide: AuthRepository,
        useClass: PrismaAuthRepository
    },
    {
        provide: NotesRepository,
        useClass: PrismaNotesRepository
    }
]

@Module({
    imports: [DatabaseModule],
    exports: providers,
    providers: providers,
})

export class RepositoriesModule { }
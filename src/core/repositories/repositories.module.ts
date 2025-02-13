import { Module, Provider } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UserRepository } from "./users/users.repository";
import { PrismaUserRepository } from "./users/prisma-users.repositorie";
import { AuthRepository } from "./auth/auth.repository";
import { PrismaAuthRepository } from "./auth/prisma-auth.repositorie";

const providers: Provider[] = [
    {
        provide: UserRepository,
        useClass: PrismaUserRepository
    },
    {
        provide: AuthRepository,
        useClass: PrismaAuthRepository
    }
]

@Module({
    imports: [DatabaseModule],
    exports: providers,
    providers: providers,
})

export class RepositoriesModule {}
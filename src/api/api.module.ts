import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UseCasesModule } from "src/core/use-cases/use-cases.module";
import { AuthController } from "./controllers/auth/auth.controller";
import { ApiHealthCheckController } from "./controllers/health-check/health-check.controller";
import { NotesController } from "./controllers/notes/notes.controller";
import { UserController } from "./controllers/users/users.controller";
import { AuthService } from "./services/auth/auth.service";
import { NotesService } from "./services/notes/notes.service";
import { UserService } from "./services/users/users.service";

@Module({
    imports: [UseCasesModule],
    controllers: [
        UserController,
        AuthController,
        NotesController,
        ApiHealthCheckController
    ],
    providers: [
        UserService,
        AuthService,
        NotesService,
        JwtService
    ],
})

export class ApiModule { }
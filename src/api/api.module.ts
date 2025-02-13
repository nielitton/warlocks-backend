import { Module } from "@nestjs/common";
import { UseCasesModule } from "src/core/use-cases/use-cases.module";
import { UserController } from "./controllers/users/users.controller";
import { UserService } from "./services/users/users.service";
import { AuthService } from "./services/auth/auth.service";
import { AuthController } from "./controllers/auth/auth.controller";
import { JwtService } from "@nestjs/jwt";
import { NotesService } from "./services/notes/notes.service";
import { NotesController } from "./controllers/notes/notes.controller";

@Module({
    imports: [UseCasesModule],
    controllers: [
        UserController,
        AuthController,
        NotesController
    ],
    providers: [
        UserService, 
        AuthService,
        NotesService,
        JwtService
    ],
})

export class ApiModule {}
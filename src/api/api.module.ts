import { Module } from "@nestjs/common";
import { UseCasesModule } from "src/core/use-cases/use-cases.module";
import { UserController } from "./controllers/users/users.controller";
import { UserService } from "./services/users/users.service";
import { AuthService } from "./services/auth/auth.service";
import { AuthController } from "./controllers/auth/auth.controller";
import { JwtService } from "@nestjs/jwt";

@Module({
    imports: [UseCasesModule],
    controllers: [
        UserController,
        AuthController
    ],
    providers: [
        UserService, 
        AuthService,
        JwtService
    ],
})

export class ApiModule {}
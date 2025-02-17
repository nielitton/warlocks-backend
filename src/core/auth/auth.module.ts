import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserService } from "src/api/services/users/users.service";
import { AuthService } from "../../api/services/auth/auth.service";
import { PrismaService } from "../database/prisma/prisma.service";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../environments/environments";
import { UseCasesModule } from "../use-cases/use-cases.module";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: JWT_SECRET,
            signOptions: { expiresIn: JWT_EXPIRES_IN },
        }),
        UseCasesModule
    ],
    providers: [
        AuthService,
        PrismaService,
        JwtStrategy,
        UserService
    ],
    exports: [],
})
export class AuthModule { }
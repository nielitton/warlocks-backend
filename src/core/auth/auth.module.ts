import { Module } from "@nestjs/common";
import { AuthService } from "../../api/services/auth/auth.service";
import { UserService } from "src/api/services/users/users.service";
import { PrismaService } from "../database/prisma/prisma.service";
import { JwtStrategy } from "./jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../environments/environments";
import { UseCasesModule } from "../use-cases/use-cases.module";

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
export class AuthModule {}
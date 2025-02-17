import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JWT_EXPIRES_IN, JWT_SECRET } from "src/core/environments/environments";
import { AuthUserUseCase } from "src/core/use-cases/auth/auth.use-case";
import { LoginDto } from "../../../core/models/dtos/user-dto";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private readonly authUseCase: AuthUserUseCase,
    ) { }

    async login(data: LoginDto): Promise<any> {
        const user = await this.authUseCase.execute(data)

        const email = user.email

        return {
            token: await this.jwtService.signAsync({ email }, { secret: JWT_SECRET, expiresIn: JWT_EXPIRES_IN }),
            expires_in: JWT_EXPIRES_IN,
            user
        }
    }


}
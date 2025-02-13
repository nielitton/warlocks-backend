import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "../../../core/models/dtos/user-dto";
import { JWT_EXPIRES_IN, JWT_SECRET } from "src/core/environments/environments";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) {}

    async login(data: LoginDto): Promise<any> {
        const {email} = data
        return {
            token: await this.jwtService.signAsync({ email }, { secret: JWT_SECRET, expiresIn: JWT_EXPIRES_IN }),
            expires_in: JWT_EXPIRES_IN
        } 
    }


}
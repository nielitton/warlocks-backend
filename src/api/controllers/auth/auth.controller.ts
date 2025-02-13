import { Body, Controller, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "../../services/auth/auth.service";
import { LoginDto } from "../../../core/models/dtos/user-dto";

@Controller('login')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async login(@Body() data: LoginDto ): Promise<any> {
        return this.authService.login(data)
    }
}
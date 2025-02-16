import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "src/api/services/users/users.service";
import { LoginDto, UserDto } from "../../../core/models/dtos/user-dto";
import { AuthService } from "../../services/auth/auth.service";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService

    ) { }

    @Post('/login')
    async login(@Body() data: LoginDto): Promise<any> {
        return this.authService.login(data)
    }

    @Post('/register')
    create(@Body() user: UserDto) {
        return this.userService.create(user)
    }
}
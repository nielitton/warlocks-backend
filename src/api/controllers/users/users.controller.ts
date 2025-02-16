import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { UserService } from "src/api/services/users/users.service";
import { JwtAuthGuard } from "src/core/auth/authGuard";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('')
    findAll() {
        return this.userService.findUsers()
    }
}
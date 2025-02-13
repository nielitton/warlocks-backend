import { Body, Controller, Get, Injectable, Post, UseGuards } from "@nestjs/common";
import { UserService } from "src/api/services/users/users.service";
import { JwtAuthGuard } from "src/core/auth/authGuard";
import { UserDto } from "src/core/models/dtos/user-dto";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}
    
    @Post('')
    create(@Body() user: UserDto) {
        return this.userService.create(user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('') 
    findAll() {
        return this.userService.findUsers()
    }
}
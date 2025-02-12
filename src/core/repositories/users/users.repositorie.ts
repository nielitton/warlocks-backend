import { Injectable } from "@nestjs/common";
import { UserRepository } from "./users.repository";
import { User } from "@prisma/client";
import { UserDto } from "src/core/models/dtos/user-dto";
import { PrismaService } from "src/core/database/prisma/prisma.service";

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor (private prisma: PrismaService) {}

    create(user: UserDto): Promise<User> {
        return this.prisma.user.create({
            data: user
        })
    }
}


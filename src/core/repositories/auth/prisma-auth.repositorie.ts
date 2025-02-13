import { Injectable } from "@nestjs/common";
import { AuthRepository } from "./auth.repository";
import { LoginDto } from "src/core/models/dtos/user-dto";
import { User } from "src/core/models/entities/user.entity";
import { PrismaService } from "src/core/database/prisma/prisma.service";


@Injectable()
export class PrismaAuthRepository implements AuthRepository {
    constructor(
        private prisma: PrismaService
    ) {}

    async findUser(email: string) {
        const userFinded = await this.prisma.user.findUnique({
            where: {
                email
            },
        })

        return userFinded
    }
}


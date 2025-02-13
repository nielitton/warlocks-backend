import { Injectable } from "@nestjs/common";
import { UserRepository } from "./users.repository";
import { UserDto } from "src/core/models/dtos/user-dto";
import { PrismaService } from "src/core/database/prisma/prisma.service";
import { User } from "src/core/models/entities/user.entity";

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor (private prisma: PrismaService) {}

    create(user: UserDto): Promise<User> {
        return this.prisma.user.create({
            data: user
        })
    }

    async findMany(): Promise<Partial<User>[]> {
        const users = await this.prisma.user.findMany({
            // Aqui estou fazendo a busca pelo true, para poder usar o softDelete
            where: {
                active: true
            },
            select: {
                id: true,
                name: true,
                email: true,
                notes: {
                    select: {
                        id: true,
                        title: true,
                        content: true
                    }
                }
            }
        })

        return users
    }
}


import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/core/database/prisma/prisma.service";
import { UserDto } from "src/core/models/dtos/user-dto";
import { User } from "src/core/models/entities/user.entity";
import { UserRepository } from "./users.repository";

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService) { }

    create(user: UserDto): Promise<User> {
        return this.prisma.user.create({
            data: user
        })
    }

    async findOne(email: string): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: {
                email
            },
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


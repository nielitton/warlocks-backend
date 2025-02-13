import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt"
import { PrismaService } from "../database/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { JWT_SECRET } from "../environments/environments";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly prismaService: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_SECRET || ''
        });
    }

    async validate(data: { email: string }) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: data.email
            }
        })

        return user
    }


}
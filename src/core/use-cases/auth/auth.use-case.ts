import { Injectable } from "@nestjs/common";
import { BusinessException } from "src/core/exception/businnes-exception";
import { LoginDto } from "src/core/models/dtos/user-dto";
import { AuthRepository } from "src/core/repositories/auth/auth.repository";
import * as bcrypt from "bcryptjs"

@Injectable()
export class AuthUserUseCase {
    constructor( 
        private readonly authRepository: AuthRepository
    ) {}

    async execute(data: LoginDto) {
        const { email, password } = data

        
        const user = await this.authRepository.findUser(email);
        
        // Essas validações podem ser feitas em middlewares, porém optei por não usar esse método, por serem poucas.
        if(!user) {
            throw new BusinessException("Email ou senha incorretos", 401)
        }
        
        const validatePassword = await bcrypt.compare(password, user.password)
        
        if(!validatePassword) {
            throw new BusinessException("Email ou senha incorretos", 401)
        }

        return email
    }
}
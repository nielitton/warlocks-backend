import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt';
import { ApiModule } from 'src/api/api.module';
import { AuthModule } from 'src/core/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

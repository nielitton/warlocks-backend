import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { BusinessExceptionFilter } from 'src/core/exception/businnes-exception-filters';
import { APP_PORT } from 'src/core/environments/environments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new BusinessExceptionFilter())
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors({
    origin: true,
  })

  await app.listen(APP_PORT ?? 3000);
  console.log(`App is running on port: ${APP_PORT}`);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { BusinessExceptionFilter } from 'src/core/exception/businnes-exception-filters';
import { APP_PORT } from 'src/core/environments/environments';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new BusinessExceptionFilter())
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors({
    origin: true,
  })

  
  const config = new DocumentBuilder()
  .setTitle('Api De Notas Warlocks')
  .setDescription('Esta é uma api de notas para o teste warlocks')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(APP_PORT ?? 3000);
  console.log(`App is running on port: ${APP_PORT}`);
}
bootstrap();

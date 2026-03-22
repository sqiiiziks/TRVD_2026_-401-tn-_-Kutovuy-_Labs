import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Валідація вхідних даних (DTO)
  app.useGlobalPipes(new ValidationPipe());

  // Налаштування Swagger (документація API)
  const config = new DocumentBuilder()
    .setTitle('SmartLib API')
    .setDescription('Система керування бібліотекою')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
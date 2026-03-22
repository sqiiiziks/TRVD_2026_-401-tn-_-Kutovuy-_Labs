import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity'; // Перевірте, чи папка називається entities чи entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1007',
      database: 'smartlib',
      entities: [Book],
      synchronize: true, // Автоматично створює таблиці (тільки для розробки!)
    }),
    BooksModule,
  ],
})
export class AppModule {}
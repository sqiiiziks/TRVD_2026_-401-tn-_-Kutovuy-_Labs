import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Book } from './books/entities/book.entity'; // Перевір шлях до Book
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1007', // Твій пароль
      database: 'smartlib',
      entities: [Book, User],
      synchronize: true, // Це має бути всередині об'єкта
    }),
    BooksModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
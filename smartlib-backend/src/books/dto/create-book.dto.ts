import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Майстер і Маргарита', description: 'Назва книги' })
  title: string;

  @ApiProperty({ example: 'Михайло Булгаков', description: 'Автор книги' })
  author: string;
}
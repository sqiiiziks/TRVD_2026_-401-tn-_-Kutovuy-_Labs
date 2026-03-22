import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Майстер і Маргарита' })
  title: string;

  @ApiProperty({ example: 'Михайло Булгаков' })
  author: string;
}
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOperation({ summary: 'Отримати всі книги' })
  findAll() {
    return this.booksService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Додати нову книгу' })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Видалити книгу' })
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
} // Дужка класу в самому кінці
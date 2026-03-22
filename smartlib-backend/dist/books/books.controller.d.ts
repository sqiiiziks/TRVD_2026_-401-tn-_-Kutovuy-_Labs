import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<import("./entities/book.entity").Book[]>;
    create(createBookDto: CreateBookDto): Promise<import("./entities/book.entity").Book>;
    remove(id: string): Promise<void>;
}

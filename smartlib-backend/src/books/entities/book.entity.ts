import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isbn: string;

  @Column()
  author: string; // Спрощено для прикладу (без окремої таблиці авторів)

  @Column({ default: 0 })
  total_copies: number;
}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'ID único del libro' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Cien años de soledad', description: 'Título del libro' })
  title: string;

  @Column('text')
  @ApiProperty({ example: 'Obra maestra de la literatura mundial...', description: 'Sinopsis del libro' })
  description: string;

  @Column()
  @ApiProperty({ example: 'Sudamericana', description: 'Editorial' })
  editorial: string;

  @Column()
  @ApiProperty({ example: 1967, description: 'Año de publicación' })
  publicationYear: number;

  @Column()
  @ApiProperty({ example: 'Gabriel García Márquez', description: 'Autor' })
  author: string;

  @Column()
  @ApiProperty({ example: 'Realismo mágico', description: 'Categoría o género literario' })
  category: string;
}

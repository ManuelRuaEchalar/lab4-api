import { IsString, IsInt, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Cien años de soledad' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Obra maestra de la literatura mundial...' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Sudamericana' })
  @IsString()
  @IsNotEmpty()
  editorial: string;

  @ApiProperty({ example: 1967 })
  @IsInt()
  @Min(1000)
  publicationYear: number;

  @ApiProperty({ example: 'Gabriel García Márquez' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ example: 'Realismo mágico' })
  @IsString()
  @IsNotEmpty()
  category: string;
}

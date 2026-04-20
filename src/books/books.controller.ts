import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo libro' })
  @ApiResponse({ status: 201, description: 'El libro fue creado exitosamente.', type: Book })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los libros' })
  @ApiResponse({ status: 200, description: 'Retorna la lista de libros.', type: [Book] })
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un libro por ID' })
  @ApiResponse({ status: 200, description: 'Retorna un libro por su ID.', type: Book })
  @ApiResponse({ status: 404, description: 'Libro no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un libro parcialmente' })
  @ApiResponse({ status: 200, description: 'Libro actualizado exitosamente.', type: Book })
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un libro' })
  @ApiResponse({ status: 200, description: 'Libro eliminado exitosamente.' })
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,        // ← Recommended
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', { infer: true }) || 'localhost',
        port: configService.get<number>('DB_PORT', { infer: true }) || 5432,
        username: configService.get<string>('DB_USERNAME', { infer: true }) || 'postgres',
        password: configService.get<string>('DB_PASSWORD', { infer: true }) || 'postgres',
        database: configService.get<string>('DB_DATABASE', { infer: true }) || 'lab4_db',
        entities: [Book],
        synchronize: true, // solo para desarrollo
        ssl: configService.get<string>('DB_SSL') === 'true'
          ? { rejectUnauthorized: false }
          : false,
      }),
    }),

    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
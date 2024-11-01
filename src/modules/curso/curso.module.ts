import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from '../../entities/curso.entity';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])], // Importa a entidade Curso
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}

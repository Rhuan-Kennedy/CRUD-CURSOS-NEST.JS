import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { CursoService } from './curso.service';
import { Curso } from '../../entities/curso.entity';
import { CreateCursoDto } from './DTO/CreateCurso.dto'; 
import { Aluno } from '../../entities/aluno.entity';

@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  @UsePipes(new ValidationPipe()) // Ativa validação
  async create(@Body() createCursoDto: CreateCursoDto): Promise<Curso> {
    return this.cursoService.create(createCursoDto);
  }
  
  @Get()
  async findAll(): Promise<Curso[]> {
    return this.cursoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Curso> {
    return this.cursoService.findOne(id);
  }
  @Get(':id/alunos')
async findAlunosByCurso(@Param('id') id: number): Promise<Aluno[]> {
    return this.cursoService.findAlunosByCurso(id);
}


  @Patch(':id')
  @UsePipes(new ValidationPipe()) // Ativa validação
  async update(@Param('id') id: number, @Body() curso: Partial<CreateCursoDto>): Promise<Curso> {
    return this.cursoService.update(id, curso);
  }


  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.cursoService.remove(id);
  }
}

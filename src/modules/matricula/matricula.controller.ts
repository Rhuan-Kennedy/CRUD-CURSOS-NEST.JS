import { Controller, Post, Body, Get, Param, Patch, Delete, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { Matricula } from '../../entities/matricula.entity';
import { UpdateMatriculaDto } from './DTO/update-matricula.dto';
import { NotFoundException } from '@nestjs/common';
import { CreateMatriculaDto } from './DTO/CreateMatricula.dto';


@Controller('matriculas')
@UsePipes(new ValidationPipe({ transform: true }))
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post()
  async create(
    @Body() data: CreateMatriculaDto, 
  ): Promise<Matricula> {
    return this.matriculaService.create(data.alunoId, data.cursoId, data.dataDeMatricula);
  }

  @Get()
  async findAll(
    @Query('cursoId') cursoId?: number,
    @Query('alunoId') alunoId?: number,
  ): Promise<Matricula[]> {
    return this.matriculaService.findAll(cursoId, alunoId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Matricula> {
    const matricula = await this.matriculaService.findOne(id);
    if (!matricula) {
      throw new NotFoundException(`Matrícula com ID ${id} não encontrada`);
    }
    return matricula;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(
    @Param('id') id: number,
    @Body() data: UpdateMatriculaDto,
  ): Promise<Matricula> {
    const updatedMatricula = await this.matriculaService.update(id, data);
    if (!updatedMatricula) {
      throw new NotFoundException(`Matrícula com ID ${id} não encontrada`);
    }
    return updatedMatricula;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.matriculaService.remove(id);
  }
}
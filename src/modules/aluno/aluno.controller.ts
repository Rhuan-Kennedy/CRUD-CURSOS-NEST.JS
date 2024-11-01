import { Controller, Post, Body, Get, Param, Patch, Delete, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { Aluno } from '../../entities/aluno.entity'; 
import { CreateAlunoDto } from './DTO/create-aluno.dto';

@Controller('alunos')
export class AlunoController {
    constructor(private readonly alunoService: AlunoService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() aluno: CreateAlunoDto): Promise<Aluno> {
        return this.alunoService.create(aluno);
    }
    
    @Get() // rota para encontrar aluno por curso
  async findAll(@Query('curso') curso?: string): Promise<Aluno[]> {
    return this.alunoService.findAll(curso);
  }


    @Get(':id') // Rota para encontrar aluno por ID
    async findOne(@Param('id') id: number): Promise<Aluno> {
        return this.alunoService.findOne(id);
    }

    @Patch(':id') // rota para atualizar aluno
    @UsePipes(new ValidationPipe())
    async update(@Param('id') id: number, @Body() aluno: CreateAlunoDto): Promise<Aluno> {
        return this.alunoService.update(id, aluno);
    }
    
    @Delete(':id') // Rota para remover aluno
async remove(@Param('id') id: number): Promise<void> {
  return this.alunoService.remove(id);
}
}

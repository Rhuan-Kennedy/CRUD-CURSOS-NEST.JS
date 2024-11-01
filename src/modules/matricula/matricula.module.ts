// matricula.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matricula } from '../../entities/matricula.entity';
import { Aluno } from '../../entities/aluno.entity';
import { Curso } from '../../entities/curso.entity';
import { MatriculaService } from './matricula.service';
import { MatriculaController } from './matricula.controller';
import { AlunoModule } from '../aluno/aluno.module';  

@Module({
  imports: [
    TypeOrmModule.forFeature([Matricula, Curso]),  
    AlunoModule,  // Adiciona o AlunoModule para que o repositório seja injetado
  ],
  providers: [MatriculaService],
  controllers: [MatriculaController],
})
export class MatriculaModule {}
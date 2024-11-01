import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from '../../entities/aluno.entity';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno])],
  providers: [AlunoService],
  controllers: [AlunoController],
  exports: [TypeOrmModule],  // Exporta o TypeOrmModule para permitir que o repositório seja utilizado em outros módulos
})
export class AlunoModule {}
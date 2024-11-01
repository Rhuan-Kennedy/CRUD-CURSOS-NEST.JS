import { IsNotEmpty, isDateString, IsOptional, IsInt, IsDateString } from 'class-validator';

export class UpdateMatriculaDto {
  @IsOptional()
  @IsDateString()
  dataDeMatricula?: Date;

  @IsOptional()
  @IsInt()
  @IsNotEmpty()
  alunoId?: number;

  @IsOptional()
  @IsInt()
  @IsNotEmpty()
  cursoId?: number;
}
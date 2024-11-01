import { IsNotEmpty, IsDate, IsInt } from 'class-validator';

export class CreateMatriculaDto {
  @IsNotEmpty()
  @IsInt()
  alunoId: number;

  @IsNotEmpty()
  @IsInt()
  cursoId: number;

  @IsNotEmpty()
  dataDeMatricula: Date;
}

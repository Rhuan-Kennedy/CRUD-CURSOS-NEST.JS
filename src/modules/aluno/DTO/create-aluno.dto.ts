import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateAlunoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

}

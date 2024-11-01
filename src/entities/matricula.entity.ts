
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Aluno } from './aluno.entity';
import { Curso } from './curso.entity';

@Entity()
export class Matricula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dataDeMatricula: Date;

  @ManyToOne(() => Aluno, (aluno) => aluno.matriculas)
  aluno: Aluno;

  @ManyToOne(() => Curso, (curso) => curso.matriculas)
  curso: Curso;
}
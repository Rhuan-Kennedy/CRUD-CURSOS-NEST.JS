import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Matricula } from './matricula.entity';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Matricula, (matricula) => matricula.aluno)
  matriculas: Matricula[];
}

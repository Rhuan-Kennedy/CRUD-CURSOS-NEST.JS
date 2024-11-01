import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matricula } from '../../entities/matricula.entity';
import { Aluno } from 'src/entities/aluno.entity';
import { Curso } from 'src/entities/curso.entity';
import { UpdateMatriculaDto } from './DTO/update-matricula.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class MatriculaService {
  constructor(
    @InjectRepository(Matricula)
    private readonly matriculaRepository: Repository<Matricula>,

    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,

    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  async create(alunoId: number, cursoId: number, dataDeMatricula: Date): Promise<Matricula> {
    // Busca o aluno e o curso pelo ID fornecido
    const aluno = await this.alunoRepository.findOne({ where: { id: alunoId } });
    const curso = await this.cursoRepository.findOne({ where: { id: cursoId } });

    if (!aluno || !curso) {
      throw new Error('Aluno ou Curso não encontrado');
    }

    // Cria a matrícula e associa o aluno e o curso
    const matricula = this.matriculaRepository.create({
      dataDeMatricula,
      aluno,
      curso,
    });

    // Salva a matrícula no banco de dados
    return this.matriculaRepository.save(matricula);
  }

  async findAll(cursoId?: number, alunoId?: number): Promise<Matricula[]> {
    const queryBuilder = this.matriculaRepository.createQueryBuilder('matricula')
      .leftJoinAndSelect('matricula.aluno', 'aluno')
      .leftJoinAndSelect('matricula.curso', 'curso');
  
    if (cursoId) {
      queryBuilder.andWhere('curso.id = :cursoId', { cursoId });
    }
  
    if (alunoId) {
      queryBuilder.andWhere('aluno.id = :alunoId', { alunoId });
    }
  
    return queryBuilder.getMany();
  }


  async findOne(id: number): Promise<Matricula> {
    const matricula = await this.matriculaRepository.findOne({
        where: { id },
        relations: ['aluno', 'curso'],
    });

    if (!matricula) {
        throw new NotFoundException(`Matrícula com ID ${id} não encontrada`);
    }

    return matricula;
}

  async update(id: number, data: UpdateMatriculaDto): Promise<Matricula> {
    // Busca a matrícula pelo ID
    const matricula = await this.findOne(id);

    // Atualiza a data de matrícula se fornecida
    if (data.dataDeMatricula) {
        matricula.dataDeMatricula = data.dataDeMatricula;
    }

    // Verifica se o novo curso foi fornecido
    if (data.cursoId) {
        const curso = await this.cursoRepository.findOne({ where: { id: data.cursoId } });
        if (!curso) {
            throw new Error('Curso não encontrado');
        }
        matricula.curso = curso; // Atualiza a referência do curso
    }

    // Salva as alterações no banco de dados
    return this.matriculaRepository.save(matricula);
}

async remove(id: number): Promise<void> {
  const matricula = await this.matriculaRepository.findOne({
    where: { id },
  });

  if (!matricula) {
    throw new NotFoundException(`Matrícula com ID ${id} não encontrada`);
  }

  await this.matriculaRepository.remove(matricula);
}
}
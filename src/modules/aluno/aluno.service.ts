import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from '../../entities/aluno.entity';
import { CreateAlunoDto } from './DTO/create-aluno.dto';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
  ) {}

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const aluno = this.alunoRepository.create(createAlunoDto);
    return this.alunoRepository.save(aluno);
  }

  async findAll(curso?: string): Promise<Aluno[]> {
    const queryBuilder = this.alunoRepository.createQueryBuilder('aluno')
        .leftJoinAndSelect('aluno.matriculas', 'matricula')
        .leftJoinAndSelect('matricula.curso', 'curso');

    if (curso) {
        queryBuilder.where('curso.nome = :curso', { curso });
    }

    return queryBuilder.getMany();
}

  async findOne(id: number): Promise<Aluno> {
    try {
      return await this.alunoRepository.findOneOrFail({ where: { id } });
    } catch {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
  }

  async update(id: number, aluno: CreateAlunoDto): Promise<Aluno> {
    await this.findOne(id); // Verifica se o aluno existe
    await this.alunoRepository.update(id, aluno);
    return this.alunoRepository.findOneOrFail({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const aluno = await this.alunoRepository.findOne({ where: { id } }); 
  
    if (!aluno) {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
  
    await this.alunoRepository.remove(aluno);
  }
}
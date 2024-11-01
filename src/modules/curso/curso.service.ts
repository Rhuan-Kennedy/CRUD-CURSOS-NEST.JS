import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from '../../entities/curso.entity';
import { CreateCursoDto } from './DTO/CreateCurso.dto'; 
import { NotFoundException } from '@nestjs/common';
import { Aluno } from '../../entities/aluno.entity';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  async create(createCursoDto: CreateCursoDto): Promise<Curso> {
    const curso = this.cursoRepository.create(createCursoDto);
    return this.cursoRepository.save(curso);
  }

  async findAll(): Promise<Curso[]> {
    return this.cursoRepository.find();
  }

  async findAlunosByCurso(cursoId: number): Promise<Aluno[]> {
    const curso = await this.cursoRepository.findOne({
        where: { id: cursoId },
        relations: ['matriculas', 'matriculas.aluno'],
    });

    if (!curso) {
        throw new NotFoundException(`Curso com ID ${cursoId} não encontrado`);
    }

    return curso.matriculas.map(matricula => matricula.aluno);
}

  async findOne(id: number): Promise<Curso> {
    return this.cursoRepository.findOneOrFail({ where: { id } });
  }

  async update(id: number, curso: Partial<CreateCursoDto>): Promise<Curso> {
    let cursoExistente: Curso;
  
    try {
      // Busca o curso existente usando o ID em um objeto de opções
      cursoExistente = await this.cursoRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Curso com ID ${id} não encontrado`);
    }
  
    // Atualiza as propriedades do curso existente
    if (curso.nome) {
      cursoExistente.nome = curso.nome;
    }
  
    // Salva as alterações no banco de dados
    return this.cursoRepository.save(cursoExistente);
  }

  async remove(id: number): Promise<void> {
    await this.cursoRepository.delete(id);
  }
}

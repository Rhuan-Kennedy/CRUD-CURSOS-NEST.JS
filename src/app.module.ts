import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CursoModule } from './modules/curso/curso.module';
import { AlunoModule } from './modules/aluno/aluno.module';
import { MatriculaModule } from './modules/matricula/matricula.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carregar variáveis de ambiente do arquivo .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // Isso carrega automaticamente as entidades
      synchronize: true, // Apenas em desenvolvimento; cuidado ao usar em produção
    }),
    AlunoModule, // Importa o módulo de alunos
    CursoModule, // Importa o módulo de cursos
    MatriculaModule,
  ],
  controllers: [AppController], // Inclua seu controlador principal
  providers: [AppService], // Inclua seu serviço principal
})
export class AppModule {}

<<<<<<< HEAD
# CRUD-CURSOS-NEST.JS

Este projeto é uma API para gerenciamento de alunos, cursos e matrículas, construída com o framework NestJS. Ela foi projetada para atender às necessidades de sistemas que necessitam de operações de CRUD (criação, leitura, atualização e exclusão) com entidades interconectadas, como alunos matriculados em cursos. A API oferece rotas para manipulação de registros e suporte para filtros de consulta dinâmicos, permitindo que informações específicas sejam recuperadas facilmente através de parâmetros de consulta.

A tecnologia base do projeto é o NestJS, em conjunto com TypeORM para a gestão de dados e interações com o banco de dados. A biblioteca Class Validator é usada para garantir que todos os dados enviados estejam no formato correto, assegurando que as validações e o tratamento de exceções estejam implementados de forma robusta, retornando mensagens claras e concisas em caso de erros.

Para instalar e configurar o projeto, comece clonando o repositório e, em seguida, instale as dependências do projeto com npm install. Em seguida, configure o banco de dados, criando um arquivo .env com as variáveis de ambiente necessárias (como DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD e DATABASE_NAME). Com o ambiente configurado, execute as migrações usando npm run typeorm migration:run para preparar o banco de dados, e inicie o servidor com npm run start, que estará disponível em http://localhost:3000.

O código é estruturado de maneira modular para manter a organização e a escalabilidade. No diretório src, o projeto está dividido em várias pastas principais, como controllers para os controladores das rotas, services para lógica de negócios e CRUD, entities para as entidades do banco de dados, dto para os objetos de transferência de dados e migrations para arquivos de migração. Esse layout facilita a manutenção e a expansão do código, caso novas funcionalidades sejam adicionadas.

As rotas implementadas para cada entidade incluem operações de:

Alunos: Listagem, criação, atualização e exclusão de registros.
Cursos: Listagem, criação, atualização e exclusão.
Matrículas: Listagem de todas as matrículas, criação de novas matrículas, e exclusão.
Em cada operação de criação e atualização, as entradas de dados são validadas, garantindo que o sistema lida adequadamente com dados incompletos ou inválidos, informando o usuário de forma clara sobre o que precisa ser corrigido.


Para consultar as rotas do backend, utilize as seguintes orientações para cada entidade:

Aluno: A rota GET /alunos retorna todos os alunos, podendo ser filtrada por curso com GET /alunos?curso=nomeCurso. Para buscar um aluno específico, use GET /alunos/:id.
Matrícula: Utilize GET /matriculas para listar todas as matrículas. Para detalhes de uma matrícula específica, consulte GET /matriculas/:id.
Curso: A rota GET /cursos lista todos os cursos; para um curso específico, use GET /cursos/:id.



=======
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
>>>>>>> f8e2b62 (Initial commit)

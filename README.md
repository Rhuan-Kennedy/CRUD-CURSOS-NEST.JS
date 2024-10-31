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




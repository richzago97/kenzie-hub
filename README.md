# Documentação do Projeto Kenzie Hub

## Visão Geral
O projeto Kenzie Hub é uma aplicação que permite aos usuários se cadastrar, fazer login, adicionar e visualizar portfólios e projetos em seu perfil, interagir com outros usuários e compartilhar informações relacionadas à sua jornada como desenvolvedor. O projeto foi dividido em várias partes, cada uma adicionando novos recursos e funcionalidades à aplicação. Abaixo, você encontrará a documentação completa das partes 1, 2 e 3 do projeto.

### Parte 1 - Cadastro e Login

#### Sobre a Parte 1
Nesta primeira parte do projeto, o foco estava na criação de funcionalidades de cadastro e login. Os usuários podem se registrar na plataforma, fornecendo informações pessoais, como nome, email, senha, bio, informações de contato e módulo do curso. Além disso, eles podem fazer login em suas contas.

#### Principais Funcionalidades
- Cadastro de Usuário: Os usuários podem criar uma conta fornecendo informações detalhadas.
- Login de Usuário: Usuários registrados podem fazer login em suas contas.
- Proteção de Rotas: As rotas são protegidas, permitindo o acesso somente a usuários autenticados.
- Validação de Formulários: As informações fornecidas nos formulários de cadastro e login são validadas.
- Redirecionamento: Os usuários são redirecionados após o registro ou o login.

#### Uso de Tecnologias
- React.js: A aplicação é construída em React.js para criar componentes reutilizáveis e uma experiência de usuário interativa.
- React Router Dom: A navegação na aplicação é gerenciada com o React Router Dom para criar rotas protegidas e redirecionamentos.
- React Hook Form: A validação de formulários é facilitada com o uso do React Hook Form.
- Toastify: Toastify é usado para exibir notificações de sucesso e erro para o usuário.
- API: A aplicação se comunica com a Kenzie Hub API para autenticação e armazenamento de dados de usuário.


### Parte 2 - Refatoração para TypeScript

#### Sobre a Parte 2
Nesta segunda parte do projeto, o foco estava na refatoração do código existente para utilizar TypeScript. A migração para TypeScript torna a aplicação mais segura, proporcionando uma experiência de desenvolvimento mais robusta.

#### Alterações Realizadas
- Configuração do TypeScript no arquivo `tsconfig.json`.
- Alteração de componentes e contextos para arquivos com a extensão `.tsx`.
- Criação de interfaces para tipagem das props e estados dos componentes.
- Utilização de useContext para evitar prop drilling.

#### Uso de Tecnologias
- TypeScript: A aplicação foi migrada para TypeScript para fornecer tipagem estática.
- Context API: Contextos são utilizados para gerenciar o estado global da aplicação.
- React.js: A aplicação continua sendo desenvolvida em React.js para manter a funcionalidade existente.

### Parte 3 - Ampliação da Aplicação

#### Sobre a Parte 3
Nesta terceira parte do projeto, a aplicação Kenzie Hub foi expandida para incluir novos recursos e funcionalidades. A estilização da aplicação já está completa, e a aplicação utiliza uma nova API chamada "Hamburgueria Kenzie V2 API".

#### Principais Funcionalidades
- A aplicação permite aos usuários compartilharem seus trabalhos com outros usuários.
- Contextos foram criados para evitar o prop drilling e fornecer gerenciamento centralizado do estado.
- A aplicação utiliza tipagem TypeScript para garantir consistência e segurança de código.

#### Uso de Tecnologias
- TypeScript: A aplicação é desenvolvida em TypeScript para fornecer uma experiência de desenvolvimento mais segura.
- Context API: Contextos são utilizados para gerenciar o estado global da aplicação e evitar prop drilling.
- React.js: A aplicação é construída em React.js para criar componentes reutilizáveis e proporcionar interatividade.
- Styled Components: Os componentes estilizados são criados com Styled Components para uma estilização modular.
- API: A aplicação se comunica com a Hamburg

ueria Kenzie V2 API para obter informações e compartilhar trabalhos.

#### Como Executar o projeto

1. Clone o repositório
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando `npm install` para baixar as dependências do projeto.
4. Utilize o comando `npm start` para iniciar a aplicação no servidor de desenvolvimento.
5. Acesse a aplicação no seu navegador em [http://localhost:3000](http://localhost:3000).

## Considerações Finais
O projeto Kenzie Hub é uma demonstração do aprendizado e habilidades do desenvolvedor na criação de uma aplicação completa usando tecnologias como React.js, TypeScript, Styled Components e Context API. Cada parte do projeto adiciona novos recursos e funcionalidades à aplicação, enquanto a migração para TypeScript aumenta a robustez do código. A aplicação é um exemplo de como criar uma plataforma para compartilhamento de portfólios e trabalhos em uma comunidade de desenvolvedores.

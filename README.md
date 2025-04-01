# Atividade-Web P1

## Desenvolvimento da Aplicação

Esta aplicação foi desenvolvida seguindo a arquitetura MVC (Model-View-Controller), garantindo uma estrutura organizada e de fácil manutenção. O projeto inclui dois CRUDs: um para a gestão de produtos e outro para o gerenciamento de usuários.

A estrutura do projeto está organizada em pastas conforme o padrão MVC:

Views: Contém os arquivos EJS, responsáveis pelo front-end.

Config: Contém a configuração do banco de dados.

Controllers: Responsáveis por executar os comandos SQL.

Routes: Contém os endpoints da API, lidando com as requisições e respostas.

## Implementação do MVC

O MVC foi aplicado para garantir uma separação clara das responsabilidades:

Model: Define a estrutura dos dados e a interação com o banco.

View: Utiliza EJS para renderizar dinamicamente o conteúdo exibido ao usuário.

Controller: Contém a lógica de negócio e manipulação dos dados entre o Model e a View.

## Validação de Campos

A validação dos campos foi implementada tanto no lado do cliente quanto no servidor:

No front-end, utilizamos atributos HTML como type="email" para validar automaticamente e-mails e minlength para verificar o tamanho mínimo dos campos.

Um script JavaScript intercepta o envio do formulário utilizando preventDefault(), garantindo que a operação seja identificada com base no botão pressionado.

Para operações que requerem um ID, o sistema utiliza querySelectorAll para obter o campo correspondente e verifica se ele está preenchido. Caso contrário, um alerta é exibido ao usuário.

## Dificuldades Encontradas e Soluções

Durante o desenvolvimento, algumas dificuldades foram enfrentadas:

Organização das rotas: Inicialmente, houve dificuldades em estruturar corretamente os endpoints da API. A solução foi seguir padrões RESTful e segmentar adequadamente as rotas.

Validação de formulários: No início, algumas validações eram feitas apenas no cliente, o que podia ser burlado. Implementamos validações no back-end para maior segurança.

Integração com o banco de dados: Algumas consultas SQL apresentavam erros de sintaxe. Utilizamos console.log e testes unitários para depurar e corrigir os problemas.

## Referências Utilizadas

Documentação oficial do Node.js

Express.js - Framework para Node.js

EJS - Templates para JavaScript

Sequelize - ORM para Node.js

Validação de formulários HTML


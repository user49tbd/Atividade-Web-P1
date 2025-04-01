# Atividade-Web P1

## Desenvolvimento da Aplicação

Esta aplicação foi desenvolvida seguindo a arquitetura MVC (Model-View-Controller), garantindo uma estrutura organizada e de fácil manutenção. O projeto inclui dois CRUDs: um para a gestão de produtos e outro para o gerenciamento de usuários.

A estrutura do projeto está organizada em pastas conforme o padrão MVC:
| **Pasta**  | **Descrição**  |
|:---------:|:---------------------------------------------------:|
| Views     | Contém os arquivos EJS, responsáveis pelo front-end. |
| Config    | Contém a configuração do banco de dados. |
| Controllers | Responsáveis por executar os comandos SQL. |
| Routes    | Contém os endpoints da API, lidando com as requisições e respostas. |
| Models    | Define a estrutura dos dados e interage com o banco de dados. |

```
📦 projeto-mvc
├── 📂 config
│   ├── db.js
├── 📂 controllers
│   ├── homeController.js
│   ├── produtoController.js
│   ├── usuarioController.js
├── 📂 models
│   ├── produtoModel.js
│   ├── usuarioModel.js
├── 📂 routes
│   ├── homeRoutes.js
│   ├── produtoRoutes.js
│   ├── usuarioRoutes.js
├── 📂 views
│   ├── 📂 partials
│        ├── header.ejs
│   ├── 📂 Produto
│        ├── produto.ejs
│   ├── 📂 Usuario
│        ├── usuario.ejs
│   ├── index.ejs
├── server.js
├── package.json
```

## Implementação do MVC

O MVC foi aplicado para garantir uma separação clara das responsabilidades:

- Model: Define a estrutura dos dados e a interação com o banco.

- View: Utiliza EJS para renderizar dinamicamente o conteúdo exibido ao usuário.

- Controller: Contém a lógica de negócio e manipulação dos dados entre o Model e a View.

## Validação de Campos

- No front-end, utilizamos atributos HTML como type="email" para validar automaticamente e-mails e minlength para verificar o tamanho mínimo dos campos.

- Um script JavaScript intercepta o envio do formulário utilizando preventDefault(), garantindo que a operação seja identificada com base no botão pressionado.

- Para operações que requerem um ID, o sistema utiliza querySelectorAll para obter o campo correspondente e verifica se ele está preenchido. Caso contrário, um alerta é exibido ao usuário.

## Dificuldades Encontradas e Soluções

Durante o desenvolvimento, algumas dificuldades foram enfrentadas:

- Organização das rotas: Inicialmente, houve dificuldades em estruturar corretamente os endpoints da API. A solução foi seguir padrões RESTful e segmentar adequadamente as rotas.

- Integração com o banco de dados: Algumas consultas apresentavam erros de sintaxe. Utilizamos console.log e testes unitários para depurar e corrigir os problemas.

## Referências Utilizadas

- Documentação oficial do Node.js

- Express.js - Framework para Node.js

- EJS - Templates para JavaScript


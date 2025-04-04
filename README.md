# Atividade-Web P1

## 🧱 Desenvolvimento da Aplicação

Esta aplicação foi desenvolvida seguindo a arquitetura MVC (Model-View-Controller), garantindo uma estrutura organizada e de fácil manutenção. O projeto inclui dois CRUDs: um para a gestão de produtos e outro para o gerenciamento de usuários.

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
A estrutura do projeto está organizada em pastas conforme o padrão MVC:

<table style="width:100%;">
  <thead>
    <tr>
      <th>Pasta</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Views</td>
      <td>Contém os arquivos EJS, responsáveis pelo front-end.</td>
    </tr>
    <tr>
      <td>Config</td>
      <td>Contém a configuração do banco de dados.</td>
    </tr>
    <tr>
      <td>Controllers</td>
      <td>Responsáveis por executar os comandos SQL.</td>
    </tr>
    <tr>
      <td>Routes</td>
      <td>Contém os endpoints da API, lidando com as requisições e respostas.</td>
    </tr>
    <tr>
      <td>Models</td>
      <td>Define a estrutura dos dados e interage com o banco de dados.</td>
    </tr>
  </tbody>
</table>

## 📚 Implementação do MVC

O MVC foi aplicado para garantir uma separação clara das responsabilidades:

- Model: Define a estrutura dos dados e a interação com o banco.

- View: Utiliza EJS para renderizar dinamicamente o conteúdo exibido ao usuário.

- Controller: Contém a lógica de negócio e manipulação dos dados entre o Model e a View.

## ✅ Validação de Campos

- No front-end, utilizamos atributos HTML como type="email" para validar automaticamente e-mails e minlength para verificar o tamanho mínimo dos campos.

- Um script JavaScript intercepta o envio do formulário utilizando preventDefault(), garantindo que a operação seja identificada com base no botão pressionado.

- Para operações que requerem um ID, o sistema utiliza querySelectorAll para obter o campo correspondente e verifica se ele está preenchido. Caso contrário, um alerta é exibido ao usuário.

## ⚠️ Dificuldades Encontradas e Soluções

Durante o desenvolvimento, algumas dificuldades foram enfrentadas:

- Organização das rotas: Inicialmente, houve dificuldades em estruturar corretamente os endpoints da API. A solução foi seguir padrões RESTful e segmentar adequadamente as rotas.

- Integração com o banco de dados: Algumas consultas apresentavam erros de sintaxe. Utilizamos console.log e testes unitários para depurar e corrigir os problemas.

## 🚀 Como Rodar o Projeto

## Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 14+)
* [npm](https://www.npmjs.com/)
* [MySQL Server](https://dev.mysql.com/downloads/mysql/) (versão 8.0+)

## Configuração

1. **MySQL:**
    - Instale o MySQL e crie o banco `AtividadeWebP1_DB`.

2. **Projeto:**
    - Clone o repositório.
    - `cd AtividadeWebP1`
    - `npm install`
    - Crie `.env` com:
      ```dotenv
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=sua_senha_do_root
        DB_DATABASE=AtividadeWebP1_DB
      ```

3.  **Execução:**
    - `npm run start`
    - Acesse `http://127.0.0.1:3000`.

## 📚 Referências Utilizadas

- [Documentação oficial do Node.js](https://nodejs.org/docs/latest/api/)

- [Express.js - Framework para Node.js](https://expressjs.com/en/5x/api.html)

- [EJS - Templates para JavaScript](https://ejs.co/#docs)

## 📝 Endpoints
### Produto
- GET /produtos: Retornar todos os produtos.
  ![getAll](https://github.com/user-attachments/assets/2b1b1e58-a56f-40dd-9256-e99847f02583)
- GET /produtos/{id}: Retornar o produto com o ID especificado.
  ![get](https://github.com/user-attachments/assets/b33966f9-f5cc-4c5b-bb8a-ef933dc072a6)
- POST /produtos: Criar um novo produto (com validação de campos).
  ![create](https://github.com/user-attachments/assets/0d3d415a-2504-4f6f-b4e9-1be63d0c2840)
- PUT /produtos/{id}: Atualizar os dados de um produto existente (com validação de campos).
  ![put](https://github.com/user-attachments/assets/f8d27302-3b58-4938-99ae-9969b9cc9ab2)
- DELETE /produtos/{id}: Excluir o produto com o ID especificado.
  ![delete](https://github.com/user-attachments/assets/e9bf5ede-dcc3-4fe6-90b5-9f2616540a3c)
### Usuário
- GET /usuarios: Retornar todos os usuarios.
  ![getAllU](https://github.com/user-attachments/assets/56231907-1a6b-4193-9474-4087d39da17b)
- GET /usuarios/{id}: Retornar o usuario com o ID especificado.
  ![getU](https://github.com/user-attachments/assets/1db07e1d-d321-4861-8a21-b40eb5a02891)
- POST /usuarios: Criar um novo usuario (com validação de campos).
  ![criateU](https://github.com/user-attachments/assets/06b974a8-0e72-45bc-92e5-c5c1764b0db1)
- PUT /usuarios/{id}: Atualizar os dados de um usuario existente (com validação de campos).
  ![updateU](https://github.com/user-attachments/assets/ca4ac599-3ac8-4226-aad9-081fdf78b218)
- DELETE /usuarios/{id}: Excluir o usuario com o ID especificado.
  ![deleteU](https://github.com/user-attachments/assets/16522baa-dded-4e8b-92e3-712d6fd6f587)

## 📌 Autores
**- Jonathan Moura Andrade**
**- Kaik Silva Sousa**
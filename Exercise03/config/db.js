import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao db:", err);
    throw err;
  }
  console.log("Conectado ao banco de dados.");
});

db.run(
  `CREATE TABLE IF NOT EXISTS PRODUTO(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME TEXT NOT NULL,
    PRECO DOUBLE NOT NULL,
    ESTOQUE INTEGER NOT NULL,
    DESCRIPTION TEXT
  )`,
  (err) => {
    if (err) {
      console.error("Erro ao criar a tabela:", err);
      throw err;
    }
    console.log("Tabela 'PRODUTO' criada ou já existente.");
  }
);

db.run(
  `CREATE TABLE IF NOT EXISTS USUARIO(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME TEXT NOT NULL,
    EMAIL TEXT NOT NULL,
    CPF TEXT NOT NULL
  )`,
  (err) => {
    if (err) {
      console.error("Erro ao criar a tabela:", err);
      throw err;
    }
    console.log("Tabela 'USUARIO' criada ou já existente.");
  }
);
export default db


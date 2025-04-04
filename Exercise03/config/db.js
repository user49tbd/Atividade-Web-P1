import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log("Conectado ao banco de dados MySQL.");

async function createTables() {
  try {
    const [produtoResult] = await pool.execute(`
      CREATE TABLE IF NOT EXISTS PRODUTO(
        ID INT AUTO_INCREMENT PRIMARY KEY,
        NOME VARCHAR(255) NOT NULL,
        PRECO DOUBLE NOT NULL,
        ESTOQUE INT NOT NULL,
        DESCRICAO TEXT
      )
    `);
    console.log("Tabela 'PRODUTO' criada ou já existente.");

    const [usuarioResult] = await pool.execute(`
      CREATE TABLE IF NOT EXISTS USUARIO(
        ID INT AUTO_INCREMENT PRIMARY KEY,
        NOME VARCHAR(255) NOT NULL,
        EMAIL VARCHAR(255) NOT NULL,
        CPF VARCHAR(20) NOT NULL,
        UNIQUE KEY (EMAIL),
        UNIQUE KEY (CPF)
      )
    `);
    console.log("Tabela 'USUARIO' criada ou já existente.");

  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
    throw error;
  }
}

createTables();

export default pool;
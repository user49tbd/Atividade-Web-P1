import db from "../config/db.js";

export const criarP = async (id, nome, preco, estoque, description) => {
  if (!nome || !preco || !estoque) {
    return { msg: "Nome, preço e estoque são campos obrigatórios." };
  }

  try {
    const [result] = await db.execute(
      "INSERT INTO PRODUTO (ID, NOME, PRECO, ESTOQUE, DESCRICAO) VALUES (?, ?, ?, ?, ?)",
      [id, nome, preco, estoque, description]
    );
    return { id: result.insertId, nome, preco, estoque, description };
  } catch (err) {
    console.error("Erro ao criar o produto:", err);
    return { msg: "Erro ao criar o produto: " + err.message };
  }
};

export const listarP = async () => {
  try {
    const [rows] = await db.execute("SELECT * FROM PRODUTO");
    return rows;
  } catch (err) {
    console.error("Erro ao listar produtos:", err);
    return { msg: "Erro ao listar produtos: " + err.message };
  }
};

export const buscarP = async (id) => {
  if (!id) {
    return { msg: "O ID do produto é obrigatório." };
  }

  try {
    const [rows] = await db.execute("SELECT * FROM PRODUTO WHERE ID = ?", [id]);
    const row = rows[0];
    if (!row) {
      return { msg: "PRODUTO não encontrado." };
    }
    return {
      id: row.ID,
      nome: row.NOME,
      preco: row.PRECO,
      estoque: row.ESTOQUE,
      description: row.DESCRICAO,
    };
  } catch (err) {
    console.error("Erro ao buscar produto:", err);
    return { msg: "Erro ao buscar produto: " + err.message };
  }
};

export const atualizarP = async (id, nome, preco, estoque, description) => {
  if (!id || !nome || !preco || !estoque) {
    return { msg: "ID, nome, preço e estoque são campos obrigatórios." };
  }

  try {
    const [result] = await db.execute(
      "UPDATE PRODUTO SET NOME = ?, PRECO = ?, ESTOQUE = ?, DESCRICAO = ? WHERE ID = ?",
      [nome, preco, estoque, description, id]
    );
    if (result.affectedRows === 0) {
      return { msg: "Produto não encontrado para atualização." };
    }
    return { id: id, nome, preco, estoque, description };
  } catch (err) {
    console.error("Erro ao atualizar produto:", err);
    return { msg: "Erro ao atualizar produto: " + err.message };
  }
};

export const excluirP = async (id) => {
  if (!id) {
    return { msg: "O ID do produto é obrigatório." };
  }

  try {
    const [result] = await db.execute("DELETE FROM PRODUTO WHERE ID = ?", [id]);
    if (result.affectedRows === 0) {
      return { msg: "Produto não encontrado para exclusão." };
    }
    return { msg: "Produto excluído com sucesso." };
  } catch (err) {
    console.error("Erro ao excluir produto:", err);
    return { msg: "Erro ao excluir produto: " + err.message };
  }
};
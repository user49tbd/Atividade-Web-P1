import db from "../config/db.js";

export const criarU = async (id, nome, email, cpf) => {
  if (!nome || !email || !cpf) {
    return { msg: "Nome, email e cpf são campos obrigatórios." };
  }

  try {
    const [result] = await db.execute(
      "INSERT INTO USUARIO (ID, NOME, EMAIL, CPF) VALUES (?, ?, ?, ?)",
      [id, nome, email, cpf]
    );
    return { id: result.insertId, nome, email, cpf };
  } catch (err) {
    console.error("Erro ao criar o usuário:", err);
    return { msg: "Erro ao criar o usuário: " + err.message };
  }
};

export const listarU = async () => {
  try {
    const [rows] = await db.execute("SELECT * FROM USUARIO");
    return rows;
  } catch (err) {
    console.error("Erro ao listar usuários:", err);
    return { msg: "Erro ao listar usuários: " + err.message };
  }
};

export const buscarU = async (id) => {
  if (!id) {
    return { msg: "O ID do usuário é obrigatório." };
  }

  try {
    const [rows] = await db.execute("SELECT * FROM USUARIO WHERE ID = ?", [id]);
    const row = rows[0];
    if (!row) {
      return { msg: "Usuário não encontrado." };
    }
    return { id: row.ID, nome: row.NOME, email: row.EMAIL, cpf: row.CPF };
  } catch (err) {
    console.error("Erro ao buscar usuário:", err);
    return { msg: "Erro ao buscar usuário: " + err.message };
  }
};

export const atualizarU = async (id, nome, email, cpf) => {
  if (!id || !nome || !email || !cpf) {
    return { msg: "ID, nome, email e cpf são campos obrigatórios." };
  }

  try {
    const [result] = await db.execute(
      "UPDATE USUARIO SET NOME = ?, EMAIL = ?, CPF = ? WHERE ID = ?",
      [nome, email, cpf, id]
    );
    if (result.affectedRows === 0) {
      return { msg: "Usuário não encontrado para atualização." };
    }
    return { id, nome, email, cpf };
  } catch (err) {
    console.error("Erro ao atualizar usuário:", err);
    return { msg: "Erro ao atualizar usuário: " + err.message };
  }
};

export const excluirU = async (id) => {
  if (!id) {
    return { msg: "O ID do usuário é obrigatório." };
  }

  try {
    const [result] = await db.execute("DELETE FROM USUARIO WHERE ID = ?", [id]);
    if (result.affectedRows === 0) {
      return { msg: "Usuário não encontrado para exclusão." };
    }
    return { msg: "Usuário excluído com sucesso." };
  } catch (err) {
    console.error("Erro ao excluir usuário:", err);
    return { msg: "Erro ao excluir usuário: " + err.message };
  }
};
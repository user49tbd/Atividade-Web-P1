import dataBase from "../config/db.js" 
const db = dataBase
export const criarU = (id, nome, email, cpf) => {
    return new Promise((resolve, reject) => {
      if (!nome || !email || !cpf) {
        return resolve({msg:"Nome, email e cpf são campos obrigatórios."});
        
      }
  
      db.run(
        "INSERT INTO USUARIO (ID, NOME, EMAIL, CPF) VALUES (?, ?, ?, ?)",
        [id, nome, email, cpf],
        function (err) {
          if (err) {
            return resolve({msg:"Erro ao criar o usuário: " + err});
          }
          resolve({ id: this.lastID, nome, email, cpf });
        }
      );
    });
  };
  export const listarU = () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM USUARIO", (err, rows) => {
        if (err) {
          return resolve({msg:"Erro ao listar usuarios: " + err});
        }
        resolve(rows);
      });
    });
  };
  
  export const buscarU = (id) => {
    return new Promise((resolve, reject) => {
      if (!id) {
        return resolve({msg:"O ID do usuario é obrigatório."});
      }
  
      db.get("SELECT * FROM USUARIO WHERE ID = ?", [id], (err, row) => {
        if (err) {
          return resolve({msg:"Erro ao buscar usuario: " + err});
        }
        if (!row) {
          return resolve({msg:"Usuario não encontrado."});
        }
        row
        resolve({id:row.ID,nome:row.NOME,email:row.EMAIL,cpf:row.CPF});
      });
    });
  };
  
  export const atualizarU = (id, nome, email, cpf) => {
    return new Promise((resolve, reject) => {
      if (!id || !nome || !email || !cpf) {
        return resolve({msg:"ID, Nome, email e cpf são campos obrigatórios."});
      }
  
      db.run(
        "UPDATE USUARIO SET NOME = ?, EMAIL = ?, CPF = ? WHERE ID = ?",
        [nome, email, cpf, id],
        function (err) {
          if (err) {
            return resolve({msg:"Erro ao atualizar usuario: " + err});
          }
          if (this.changes === 0) {
            return resolve({msg:"Usuario não encontrado para atualização."});
          }
          //resolve("Produto atualizado com sucesso.");
          resolve({id, nome, email, cpf });
        }
      );
    });
  };
  
  export const excluirU = (id) => {
    return new Promise((resolve, reject) => {
      if (!id) {
        return resolve({msg:"O ID do usuario é obrigatório."});
      }
  
      db.run("DELETE FROM USUARIO WHERE ID = ?", [id], function (err) {
        if (err) {
          return resolve({msg:"Erro ao excluir usuario: " + err});
        }
        if (this.changes === 0) {
          return resolve({msg:"Usuario não encontrado para exclusão."});
        }
        resolve({msg:"Usuario excluído com sucesso."});
      });
    });
  };
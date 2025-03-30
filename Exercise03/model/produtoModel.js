import dataBase from "../config/db.js" 
const db = dataBase
export const criarP = (id, nome, preco, estoque, description) => {
    return new Promise((resolve, reject) => {
      if (!nome || !preco || !estoque) {
        return resolve({msg:"Nome, preço e estoque são campos obrigatórios."});
        
      }
  
      db.run(
        "INSERT INTO PRODUTO (ID, NOME, PRECO, ESTOQUE, DESCRIPTION) VALUES (?, ?, ?, ?, ?)",
        [id, nome, preco, estoque, description],
        function (err) {
          if (err) {
            return resolve({msg:"Erro ao criar o usuário: " + err});
          }
          resolve({ id: this.lastID, nome, preco, estoque, description });
        }
      );
    });
  };
  export const listarP = () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM PRODUTO", (err, rows) => {
        if (err) {
          return resolve({msg:"Erro ao listar produtos: " + err});
        }
        resolve(rows);
      });
    });
  };
  
  export const buscarP = (id) => {
    return new Promise((resolve, reject) => {
      if (!id) {
        return resolve({msg:"O ID do produto é obrigatório."});
      }
  
      db.get("SELECT * FROM PRODUTO WHERE ID = ?", [id], (err, row) => {
        if (err) {
          return resolve({msg:"Erro ao buscar produto: " + err});
        }
        if (!row) {
          return resolve({msg:"PRODUTO não encontrado."});
        }
        row
        resolve({id:row.ID,nome:row.NOME,preco:row.PRECO,estoque:row.ESTOQUE,
          description:row.DESCRIPTION });
      });
    });
  };
  
  export const atualizarP = (id, nome, preco, estoque, description) => {
    return new Promise((resolve, reject) => {
      if (!id || !nome || !preco || !estoque) {
        return resolve({msg:"ID, nome, preço e estoque são campos obrigatórios."});
      }
  
      db.run(
        "UPDATE PRODUTO SET NOME = ?, PRECO = ?, ESTOQUE = ?, DESCRIPTION = ? WHERE ID = ?",
        [nome, preco, estoque, description, id],
        function (err) {
          if (err) {
            return resolve({msg:"Erro ao atualizar produto: " + err});
          }
          if (this.changes === 0) {
            return resolve({msg:"Produto não encontrado para atualização."});
          }
          //resolve("Produto atualizado com sucesso.");
          resolve({ id:id, nome, preco, estoque, description });
        }
      );
    });
  };
  
  export const excluirP = (id) => {
    return new Promise((resolve, reject) => {
      if (!id) {
        return resolve({msg:"O ID do produto é obrigatório."});
      }
  
      db.run("DELETE FROM PRODUTO WHERE ID = ?", [id], function (err) {
        if (err) {
          return resolve({msg:"Erro ao excluir produto: " + err});
        }
        if (this.changes === 0) {
          return resolve({msg:"Produto não encontrado para exclusão."});
        }
        resolve({msg:"Produto excluído com sucesso."});
      });
    });
  };
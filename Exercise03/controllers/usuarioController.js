import { criarU, listarU, buscarU, atualizarU, excluirU } from "../model/usuarioModel.js"
export const index = (req, res) => {
  return res.status(200).render('Usuario/usuario',{
    usuario: {},
    lstU: []
  });
};
export const buscar = async (req, res) => {
  console.log("buscar")
  const { id } = req.params
  let result = await buscarU(id)
  console.log(result)
  return res.status(200).render('Usuario/usuario', {
    usuario: result,
    lstU: []
  });
};
export const listar = async (req, res) => {
  console.log("listar")
  //console.log(req.body)
  let result = await listarU()
  console.log(result)
  return res.status(200).render('Usuario/usuario', {
    usuario: {},
    lstU: result
  });
};
export const criar = async (req, res) => {
  console.log("criar")
  console.log(req.body)
  let { id, nome, email, cpf } = req.body
  let result = await criarU(id, nome, email, cpf)
  let lstP = await listarU()
  console.log(result)
  return res.status(200).render('Usuario/usuario', {
    usuario: result,
    lstU: lstP
  });
};
export const atualizar = async (req, res) => {
  console.log("atualizar")
  //console.log(req.body)
  let { id, nome, email, cpf } = req.body
  let result = await atualizarU(id, nome, email, cpf)
  console.log(result)
  let lstP = await listarU()
  return res.status(200).render('Usuario/usuario', {
    usuario: result,
    lstU: lstP
  });
};
export const deletar = async (req, res) => {
  console.log("deletar")
  //console.log(req.body)
  const { id } = req.params
  let result = await excluirU(id)
  console.log(result)
  let lstP = await listarU()
  return res.status(200).render('Usuario/usuario', {
    usuario: result,
    lstU: lstP
  });
};
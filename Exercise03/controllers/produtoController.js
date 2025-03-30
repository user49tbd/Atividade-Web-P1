import {criarP,listarP,buscarP,atualizarP,excluirP} from "../model/produtoModel.js"
export const index = (req, res) => {
  return res.status(200).render('Produto/produto',{
    produto:{},
    lst:[]
  });
};
export const buscar = async (req, res) => {
  console.log("buscar")
  const{id}= req.params
  let result = await buscarP(id)
  console.log(result)
  return res.status(200).render('Produto/produto',{
    produto: result,
    lst:[]
  });
};
export const listar = async (req, res) => {
  console.log("listar")
  //console.log(req.body)
  let result = await listarP()
  console.log(result)
  return res.status(200).render('Produto/produto',{
    produto:{},
    lst:result
  });
};
export const criar = async (req, res) => {
  console.log("criar")
  console.log(req.body)
  let {id, nome, preco, estoque, description} = req.body
  let result = await criarP(id, nome, preco, estoque, description)
  let lstP = await listarP()
  console.log(result)
  return res.status(200).render('Produto/produto',{
    produto: result,
    lst:lstP
  });
};
export const atualizar = async (req, res) => {
  console.log("atualizar")
  //console.log(req.body)
  let {id, nome, preco, estoque, description} = req.body
  let result = await atualizarP(id, nome, preco, estoque, description)
  console.log(result)
  let lstP = await listarP()
  return res.status(200).render('Produto/produto',{
    produto: result,
    lst:lstP
  });
};
export const deletar = async (req, res) => {
  console.log("deletar")
  //console.log(req.body)
  const{id}= req.params
  let result = await excluirP(id)
  console.log(result)
  let lstP = await listarP()
  return res.status(200).render('Produto/produto',{
    produto:result,
    lst:lstP
  });
};
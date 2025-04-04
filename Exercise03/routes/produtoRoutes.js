import express from "express";
import { index, buscar, listar, criar, atualizar, deletar } from "../controllers/produtoController.js";

const router = express.Router();

router.get("/", index);
router.get("/produtos", listar);
router.get("/produtos/:id", buscar);
router.post("/produtos", criar);
router.put("/produtos/:id", atualizar);
router.delete("/produtos/:id", deletar);

export default router;
import express from "express"
const router = express.Router();
import {index, buscar, listar, criar, atualizar, deletar} from "../controllers/usuarioController.js"

router.get('/',index)
router.get("/usuarios", listar);
router.get("/usuarios/:id", buscar);
router.post("/usuarios", criar);
router.put("/usuarios/:id", atualizar);
router.delete("/usuarios/:id", deletar);

export default router
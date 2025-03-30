import express from "express"
const router = express.Router();
import {index} from "../controllers/homeController.js"

router.get('/',index)

export default router
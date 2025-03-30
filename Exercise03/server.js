import express from "express";
import homeRouter from "./routes/homeRoutes.js";
import produtoRoutes from "./routes/produtoRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import methodOverride from "method-override";

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";

// Middleware para interpretar o corpo das requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para suportar PUT e DELETE via POST
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === "object" && "_method" in req.body) {
    return req.body._method;
  }
  return undefined; // Garante que não retorne um valor inválido
}));

// Configuração do template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Rotas
app.use("/home", homeRouter);
app.use("/produto", produtoRoutes);
app.use("/usuario", usuarioRoutes);

// Redirecionamento padrão
app.get("/", (req, res) => {
  res.redirect("/home");
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://${HOST}:${PORT}`);
});
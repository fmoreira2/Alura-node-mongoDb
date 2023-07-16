import express from "express";
import editoraController from "../controllers/editoraController.js";

const router = express.Router();

router
  .get("/editoras", editoraController.listarEditoras)
  .get("/editoras/:id", editoraController.listarEditoraPorId)
  .post("/editoras", editoraController.cadastrarEditora)
  .put("/editoras/:id", editoraController.atualizarEditora)
  .delete("/editoras/:id", editoraController.deletarEditora);

export default router;

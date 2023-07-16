import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import editoras from "./editoraRoutes.js";

const route = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({titulo: "Curso de Node 2000"});
  });

  app.use(
    express.json(),
    livros,
    autores,
    editoras
  );
};

export default route;
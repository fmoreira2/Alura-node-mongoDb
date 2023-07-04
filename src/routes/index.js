import express from "express";
import livros from "./livrosRoutes.js";

const route = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node 2000"});
    })

    app.use(
        express.json(),
        livros
    )
}

export default route
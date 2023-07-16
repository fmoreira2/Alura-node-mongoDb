import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autoresResultado = await autores.findById(id);
      if (autoresResultado !== null) {
        res.status(200).json(autoresResultado);
      } else {
        res.status(404).send({ message: "Id do autor não localizado." });
      }
    } catch (erro) {
      //res.status(500).json(err);
      next(erro);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);
      await autor.save();
      res.status(201).send(autor.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    const id = req.params.id;
    try {
      await autores.findByIdAndUpdate(id, req.body);
      res.status(200).send("Autor atualizado com sucesso");
    } catch (erro) {
      next(erro);
    }
  };

  static deletarAutor = async (req, res, next) => {
    const id = req.params.id;
    try {
      await autores.findByIdAndRemove(id);
      res.status(200).send("autor removido com sucesso!");
    } catch (error) {
      next(error);
    }
  };
}

export default AutorController;

import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros
        .find()
        .populate("autor")
        .populate("editora");
      res.status(200).json(livrosResultado);
    } catch (error) {
      next(error);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livrosResultado = await livros
        .findById(id)
        .populate("autor")
        .populate("editora");
      res.status(200).json(livrosResultado);
    } catch (error) {
      next(error);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    const id = req.params.id;
    try {
      await livros.findByIdAndUpdate(id, req.body);
      res.status(201).send("Atualizado com sucesso");
    } catch (error) {
      next(error);
    }
  };

  static deletarLivro = async (req, res, next) => {
    const id = req.params.id;
    try {
      await livros.findByIdAndRemove(id);
      res.status(200).send("livro removido com sucesso!");
    } catch (error) {
      next(error);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;
      // const livrosResultado = await livros
      //   .find({ editora: editora }, {})
      //   .populate("autor")
      //   .populate("editora");
      // res.status(200).json(livrosResultado);
      const livrosResultado = await livros.find({ editora: editora });
      if (livrosResultado !== null) {
        res.status(200).json(livrosResultado);
      }
    } catch (error) {
      next(error);
    }
  };
}

export default LivroController;

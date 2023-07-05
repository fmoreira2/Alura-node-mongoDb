import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const livrosResultado = await livros.find();
      res.status(200).json(livrosResultado);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (error) {
      res
        .status(501)
        .send({ message: `${error.message} - erro ao cadastrar livro` });
    }
  };
}

export default LivroController;

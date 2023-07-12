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

  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const livrosResultado = await livros.findById(id);
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

  // static atualizarLivro = async (req, res) => {
  //   try {
  //     const id = req.params.id;
  //     await livros.findByIdAndUpdate(id, { set: req.body }, (err, result) => {
  //       if (!err) {
  //         res.status(200).send({ message: "livro atualizado com sucesso" });
  //       } else {
  //         res.status(500).send({ message: "erro" });
  //       }
  //     });
  //   } catch (error) {
  //     res
  //       .status(501)
  //       .send({ message: `${error.message} - erro ao atualizar livro` });
  //   }
  // };

  static atualizarLivro = async (req, res) => {
    const id = req.params.id;
    try {
      await livros.findByIdAndUpdate(id, { $set: req.body });
    } catch (err) {
      res.status(201).send("Atualizado com sucesso");
    }
  };
}

export default LivroController;

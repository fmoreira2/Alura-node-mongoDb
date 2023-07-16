import editoras from "../models/Editora.js";

class EditoraController {
  static listarEditoras = async (req, res, next) => {
    try {
      const editorasResultado = await editoras.find();
      res.status(200).json(editorasResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarEditoraPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const editorasResultado = await editoras.findById(id);
      res.status(200).json(editorasResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarEditora = async (req, res, next) => {
    try {
      let editora = new editoras(req.body);
      await editora.save();
      res.status(201).send(editora.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarEditora = async (req, res, next) => {
    const id = req.params.id;
    try {
      await editoras.findByIdAndUpdate(id, req.body);
      res.status(200).send("Editora atualizado com sucesso");
    } catch (error) {
      next(error);
    }
  };

  static deletarEditora = async (req, res, next) => {
    const id = req.params.id;
    try {
      await editoras.findByIdAndRemove(id);
      res.status(200).send("editora removida com sucesso!");
    } catch (error) {
      next(error);
    }
  };
}

export default EditoraController;

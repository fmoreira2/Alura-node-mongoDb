import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: [true, "O Titulo do livro é obrigatório."] },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O autor é obrigatório."],
  },
  editora: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "editoras",
    required: [true,"A editora é obrigatória."],
  },
  numeroPagina: { type: Number },
});

const livros = mongoose.model("livros", livroSchema);
export default livros;

import mongoose from "mongoose";

const autorSchema = mongoose.Schema(
  {
    id: { type: "string"},
    nome: { type: "string", required: [true, "O nome do Autor é obrigatório"] },
    nacionalidade: { type: "string"},
  },
  { versionKey: false }
);

const autores = mongoose.model("autores", autorSchema);
export default autores;

import mongoose from "mongoose";

const editoraSchema = mongoose.Schema(
  {
    id: { type: "string" },
    nome: { type: "string" }
  },
  { versionKey: false }
);

const editoras = mongoose.model("editoras", editoraSchema);
export default editoras;

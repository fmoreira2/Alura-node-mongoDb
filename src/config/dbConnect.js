import mongoose from "mongoose";

mongoose.connect(process.env.str_conexao);

let db = mongoose.connection;

export default db;

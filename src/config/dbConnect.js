import mongoose from "mongoose";

//"mongodb+srv://coollmasters:fm811202@neocluster.szsslsr.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(
  "mongodb+srv://coollmasters:fm811202@neocluster.szsslsr.mongodb.net/alura-node"
);

let db = mongoose.connection


export default db;
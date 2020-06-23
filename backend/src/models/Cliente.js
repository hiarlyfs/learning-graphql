const mongoose = require("../database/index");
const { composeWithMongoose } = require("graphql-compose-mongoose");

const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: false,
  },
});

const Cliente = mongoose.model("Cliente", ClienteSchema);
const ClienteTC = composeWithMongoose(Cliente);

module.exports = { Cliente, ClienteTC };

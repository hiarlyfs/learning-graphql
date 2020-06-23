const { Cliente, ClienteTC } = require("../models/Cliente");

// Forma de criar os próprios resolvers
ClienteTC.addResolver({
  name: "findByYear",
  type: [ClienteTC],
  args: { ano: "Int" },
  resolve: ({ source, args: { ano } }) => {
    return Cliente.find();
  },
});

const ClienteQuery = {
  clienteById: ClienteTC.getResolver("findById"),
  clienteByIds: ClienteTC.getResolver("findByIds"),
  clienteOne: ClienteTC.getResolver("findOne"),
  clienteMany: ClienteTC.getResolver("findMany"),
  clienteCount: ClienteTC.getResolver("count"),
  clienteByYear: ClienteTC.getResolver("findByYear"),
};

const ClienteMutation = {
  clienteCreateOne: ClienteTC.getResolver("createOne"),
  clienteCreateMany: ClienteTC.getResolver("createMany"),
  clienteUpdateById: ClienteTC.getResolver("updateById"),
  clienteUpdateOne: ClienteTC.getResolver("updateOne"),
  clienteUpdateMany: ClienteTC.getResolver("updateMany"),
  clienteRemoveById: ClienteTC.getResolver("removeById"),
  clienteRemoveOne: ClienteTC.getResolver("removeOne"),
  clienteRemoveMany: ClienteTC.getResolver("removeMany"),
};

module.exports = { ClienteQuery, ClienteMutation };

const { SchemaComposer } = require("graphql-compose");
const { ClienteMutation, ClienteQuery } = require("./Cliente");

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...ClienteQuery,
});

schemaComposer.Mutation.addFields({
  ...ClienteMutation,
});

module.exports = schemaComposer.buildSchema();

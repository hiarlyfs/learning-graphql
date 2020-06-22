const { makeExecutableSchema } = require("graphql-tools");

const Cliente = require("./Cliente.schemas");
const QueryScchemas = require("./Query.schemas");

const schema = makeExecutableSchema({
  typeDefs: [Cliente.schema, QueryScchemas],
  resolvers: [Cliente.resolvers],
});

module.exports = schema;

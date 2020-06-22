const { gql } = require("apollo-server");

const schemas = gql`
  type Query {
    cliente: [Cliente!]
    getClienteBy(id: Int!): Cliente
  }
`;

module.exports = schemas;

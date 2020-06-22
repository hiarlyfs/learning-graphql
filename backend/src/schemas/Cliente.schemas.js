const { gql } = require("apollo-server");
const data = require("../data/users.js");

const schema = gql`
  type Geo {
    lat: String
    lng: String
  }

  type Companhia {
    name: String
    catchPhrase: String
    bs: String
  }

  type Endereco {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Cliente {
    id: Int
    name: String
    username: String
    email: String
    address: Endereco
    phone: String
    website: String
    company: Companhia
  }
`;

const resolvers = {
  Query: {
    cliente: () => data,
    getClienteBy: (parent, { id }) => {
      return data[id];
    },
  },
};

module.exports = { schema, resolvers };

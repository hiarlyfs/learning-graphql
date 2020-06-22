const { ApolloServer } = require("apollo-server");
const schema = require("./schemas/rootScehmas");

const server = new ApolloServer({ schema });

server.listen().then((res) => {
  console.log("servidor ok");
});

const { ApolloServer } = require("apollo-server");
const schema = require("./schemas/index");

const server = new ApolloServer({ schema });

server.listen().then((res) => {
  console.log("servidor ok");
});

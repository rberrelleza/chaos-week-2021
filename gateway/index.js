const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    { name: "books", url: "http://books:4001/graphql" },
  ],
  serviceHealthCheck: true,
});

const server = new ApolloServer({
  gateway, subscriptions: false, playground: true, introspection: true
});

server.listen({port: 4000, host:"0.0.0.0"}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
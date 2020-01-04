import { makeSchema } from "nexus"; // allows creation of imperative graphql schemas
import express from "express"; // allows creation of express server
import { ApolloServer } from "apollo-server-express"; // allows creation of graphql server

const app = express();
const schema = makeSchema({
  types: [],
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/typings.ts"
  }
});

app.use(express.json());
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

export default app;
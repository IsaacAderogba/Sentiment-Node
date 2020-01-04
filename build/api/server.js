"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nexus_1 = require("nexus"); // allows creation of imperative graphql schemas
var express_1 = __importDefault(require("express")); // allows creation of express server
var apollo_server_express_1 = require("apollo-server-express"); // allows creation of graphql server
var index_1 = require("../services/resolvers/index");
var app = express_1.default();
var schema = nexus_1.makeSchema({
    types: [index_1.Query],
    outputs: {
        schema: __dirname + "/generated/schema.graphql",
        typegen: __dirname + "/generated/typings.ts"
    }
});
app.use(express_1.default.json());
var server = new apollo_server_express_1.ApolloServer({ schema: schema });
server.applyMiddleware({ app: app });
exports.default = app;

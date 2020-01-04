import { extendType, arg } from "nexus";
import { Auth, UserInput } from "./types";
import UserController from "./controllers";

const Query = extendType({
  type: "Query",
  definition(t) {
    t.field("helloWorld", {
      type: "String",
      resolve: () => {
        return "Hello World";
      }
    });
  }
});

const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: Auth,
      args: {
        userInput: arg({ type: UserInput })
      },
      resolve: async (parent, args) => {
        const user = await UserController.registerUser(args.userInput);
        return user;
      }
    });
  }
});

export default {
  Query,
  Mutation
};

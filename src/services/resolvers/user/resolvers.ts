import { extendType, arg, stringArg } from "nexus";
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

    t.field("loginUser", {
      type: Auth,
      nullable: true,
      args: {
        email: stringArg({ required: true }),
        password: stringArg({ required: true })
      },
      resolve: async (parent, args) => {
        const { email, password } = args;
        const user = await UserController.loginUser({ email, password });
        return user;
      }
    });
  }
});

const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: Auth,
      nullable: true,
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

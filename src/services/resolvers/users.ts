import {
  objectType,
  inputObjectType,
  queryType,
  stringArg,
  extendType,
  mutationType,
  arg,
  idArg
} from "nexus";

const Me = objectType({
  name: "Me",
  definition(t) {
    t.id("userId");
    t.boolean("isAuth");
  }
});

const Auth = objectType({
  name: "Auth",
  definition(t) {
    t.id("userId");
    t.string("firstName");
    t.string("lastName");
    t.string("token");
    t.string("tokenExpiration");
  }
});

const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("firstName");
    t.string("lastName");
    t.string("email");
    t.string("password");
  }
});

const UserInput = inputObjectType({
  name: "UserInput",
  definition(t) {
    t.string("firstName", { required: true });
    t.string("lastName", { required: true });
    t.string("email", { required: true });
    t.string("password", { required: true });
  }
});

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

export default {
  Query
}
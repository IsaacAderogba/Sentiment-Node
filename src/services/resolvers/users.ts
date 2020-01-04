import {
  objectType,
  inputObjectType,
  queryType,
  stringArg,
  mutationType,
  arg,
  idArg
} from "nexus";

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

import { objectType, inputObjectType } from "nexus";

export const Me = objectType({
  name: "Me",
  definition(t) {
    t.id("userId");
    t.boolean("isAuth");
  }
});

export const Auth = objectType({
  name: "Auth",
  definition(t) {
    t.id("userId");
    t.string("firstName");
    t.string("lastName");
    t.string("token");
    t.string("tokenExpiration");
  }
});

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("firstName");
    t.string("lastName");
    t.string("email");
    t.string("password");
  }
});

export const UserInput = inputObjectType({
  name: "UserInput",
  definition(t) {
    t.string("firstName", { required: true });
    t.string("lastName", { required: true });
    t.string("email", { required: true });
    t.string("password", { required: true });
  }
});

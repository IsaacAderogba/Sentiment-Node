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

export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const UserInput = inputObjectType({
  name: "UserInput",
  definition(t) {
    t.string("firstName", { required: true });
    t.string("lastName", { required: true });
    t.string("email", { required: true });
    t.string("password", { required: true });
  }
});

export interface UserInputType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

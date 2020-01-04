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
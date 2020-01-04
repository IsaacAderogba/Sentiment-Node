"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nexus_1 = require("nexus");
var Me = nexus_1.objectType({
    name: "Me",
    definition: function (t) {
        t.id("userId");
        t.boolean("isAuth");
    }
});
var Auth = nexus_1.objectType({
    name: "Auth",
    definition: function (t) {
        t.id("userId");
        t.string("firstName");
        t.string("lastName");
        t.string("token");
        t.string("tokenExpiration");
    }
});
var User = nexus_1.objectType({
    name: "User",
    definition: function (t) {
        t.id("id");
        t.string("firstName");
        t.string("lastName");
        t.string("email");
        t.string("password");
    }
});
var UserInput = nexus_1.inputObjectType({
    name: "UserInput",
    definition: function (t) {
        t.string("firstName", { required: true });
        t.string("lastName", { required: true });
        t.string("email", { required: true });
        t.string("password", { required: true });
    }
});
var Query = nexus_1.queryType({
    definition: function (t) {
        t.string("helloWorld", {
            resolve: function () {
                return "Hello World";
            }
        });
    }
});
exports.default = {
    Query: Query
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nexus_1 = require("nexus");
exports.Me = nexus_1.objectType({
    name: "Me",
    definition: function (t) {
        t.id("userId");
        t.boolean("isAuth");
    }
});
exports.Auth = nexus_1.objectType({
    name: "Auth",
    definition: function (t) {
        t.id("userId");
        t.string("firstName");
        t.string("lastName");
        t.string("token");
    }
});
exports.User = nexus_1.objectType({
    name: "User",
    definition: function (t) {
        t.id("id");
        t.string("firstName");
        t.string("lastName");
        t.string("email");
        t.string("password");
    }
});
exports.UserInput = nexus_1.inputObjectType({
    name: "UserInput",
    definition: function (t) {
        t.string("firstName", { required: true });
        t.string("lastName", { required: true });
        t.string("email", { required: true });
        t.string("password", { required: true });
    }
});

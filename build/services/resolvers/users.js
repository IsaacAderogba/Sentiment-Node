"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nexus_1 = require("nexus");
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

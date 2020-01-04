"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nexus_1 = require("nexus");
var Query = nexus_1.extendType({
    type: "Query",
    definition: function (t) {
        t.field("helloWorld", {
            type: "String",
            resolve: function () {
                return "Hello World";
            }
        });
    }
});
exports.default = {
    Query: Query
};

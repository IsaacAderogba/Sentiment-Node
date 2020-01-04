"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./lib/env");
var server_1 = __importDefault(require("./api/server"));
var port = process.env.PORT;
server_1.default.listen(port, function () {
    return console.log("\uD83D\uDE80 Server ready at http://localhost:" + port);
});

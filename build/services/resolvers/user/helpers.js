"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.generateToken = function (_a) {
    var id = _a.id, firstName = _a.firstName, lastName = _a.lastName;
    var payload = {
        userId: id,
        firstName: firstName,
        lastName: lastName
    };
    var options = {
        expiresIn: "14d"
    };
    return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET || "secret", options);
};

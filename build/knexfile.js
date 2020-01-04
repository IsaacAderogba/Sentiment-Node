"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var development = {
    client: "pg",
    connection: "postgres://localhost/sentiment",
    migrations: {
        directory: __dirname + "/db/migrations",
        tableName: "db_migrations"
    },
    seeds: {
        directory: __dirname + "/db/seeds"
    },
    useNullAsDefault: true
};
exports.default = {
    "development": development,
    "production": "production"
};

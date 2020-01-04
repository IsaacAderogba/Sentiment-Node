module.exports = {
  development: {
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
  }
};

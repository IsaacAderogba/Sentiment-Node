exports.up = function(knex) {
  return knex.schema.createTable("Cluster", Cluster => {
    Cluster.increments();
    Cluster.string("name", 255).notNullable();
    Cluster.string("description", 510).notNullable();
    Cluster.string("imageURL", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Cluster");
};

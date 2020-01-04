exports.up = function(knex) {
  return knex.schema.createTable("Favourite", Favourite => {
    Favourite.increments();
    Favourite.integer("hackerNewsId").notNullable();
    Favourite.string("type", 255).notNullable();
    Favourite.string("title").notNullable();
    Favourite.integer("userId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("User")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Favourite");
};

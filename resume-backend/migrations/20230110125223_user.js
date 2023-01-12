exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id").unsigned().primary();

    table.string("name", 255).unique().notNullable();
    table.string("email", 255).unique().notNullable();
    table.string("password", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};

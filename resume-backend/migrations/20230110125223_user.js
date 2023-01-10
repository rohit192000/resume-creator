exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id").unsigned().primary();

    table.string("email", 50).unique().notNullable();
    table.string("password", 50).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};

exports.up = function (knex) {
  return knex.schema.createTable("education_detail", (table) => {
    table.increments("id").unsigned().primary();

    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id", "user_education_detail")
      .references("id")
      .inTable("user")
      .onUpdate("RESTRICT")
      .onDelete("RESTRICT");
    table.string("college/uni", 50).notNullable();
    table.integer("passing_year").notNullable();
    table.float("marks").notNullable();
    table.boolean("graduation").default(false).notNullable();
    table.boolean("post_graduation").default(false).notNullable();
  });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("education_detail");
};

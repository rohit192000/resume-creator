exports.up = function (knex) {
  return knex.schema.createTable("personal_detail", (table) => {
    table.increments("id").unsigned().primary();
    
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id", "user_id_personal_deatil")
      .references("id")
      .inTable("user")
      .onUpdate("RESTRICT")
      .onDelete("RESTRICT");

    table.string("name", 50).notNullable();
    table.string("email", 50).notNullable();
    table.string("phone_number", 15).notNullable();
    table.string("gender", 10).notNullable();
    table.json("experience").default(null);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("personal_detail");
};

const knex = require("knex")({
  debug: true,
  client: "mysql",
  connection: {
    host: "localhost",
    user: process.env.DB_USERNAME,
    database: "resume_creator",
  },
});

const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;

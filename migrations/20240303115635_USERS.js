/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
   return knex.schema.createTable("USERS", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("email").notNullable();
   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
   return knex.schema.dropTable("USERS");
};

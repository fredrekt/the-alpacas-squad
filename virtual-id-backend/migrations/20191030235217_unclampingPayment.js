exports.up = function(knex) {
  return knex.schema.createTable("unclampingPayment", table => {
    table.increments();
    table
      .timestamp("created_at")
      .notNull()
      .defaultTo(knex.raw("now()"));
    table.string("filename").notNull();
    table.string("plateNumber").notNull();
    table.number("latitude").notNull();
    table.number("longitude").notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};

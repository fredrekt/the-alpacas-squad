exports.up = function(knex) {
  return knex.schema.createTable("unclampingPayment", table => {
    table.increments();
    table
      .timestamp("created_at")
      .notNull()
      .defaultTo(knex.raw("now()"));
    table.string("licenseFile").notNull();
    table.string("plateNumber").notNull();
    table.number("latitude").notNull();
    table.number("longitude").notNull();
    table.string("paymentId").notNull();
    table.string("status").notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("unclampingPayment");
};

exports.up = function(knex) {
  return knex.schema.createTable("unclampingPayment", table => {
    table.increments();
    table
      .timestamp("created_at")
      .notNull()
      .defaultTo(knex.raw("now()"));
    table.string("licenseFile").notNull();
    table.string("plateNumber").notNull();
    table.decimal("latitude").notNull();
    table.decimal("longitude").notNull();
    table.string("paymentId").notNull();
    table.string("paymentStatus").notNull();
    table.string("unclampingStatus").notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("unclampingPayment");
};

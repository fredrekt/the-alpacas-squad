const bookshelf = require("../bookshelf");

const UnclampingPayment = bookshelf.model("UnclampingPayment", {
  tableName: "unclampingPayment"
});

module.exports = UnclampingPayment;

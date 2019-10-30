const express = require("express");
const bodyParser = require("body-parser");
const paymentRoutes = require("./routes/payment");

const app = express();

app.use(bodyParser);
app.use("/api", paymentRoutes(null));

module.exports = app;

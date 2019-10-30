const express = require("express");
const bodyParser = require("body-parser");
const paymentRoutes = require("./routes");

const app = express();

app.use(bodyParser);
app.use("/api", routes);

module.exports = app;

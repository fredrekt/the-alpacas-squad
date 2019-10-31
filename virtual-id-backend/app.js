const paymentRoutes = require("./routes/payment");
const paymentSocket = require("./sockets/paymentSocket");
const express = require("express");
const bodyParser = require("body-parser");
const Server = require("socket.io");

const app = express();
const io = new Server();

io.on("connection", socket => {
  console.log("A User has connected to the socket");
  paymentSocket(socket, io);
});

app.use(bodyParser);
app.use("/api", paymentRoutes(io));

module.exports = { app, io };

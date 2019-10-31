const { app, io } = require("./app");
const http = require("http").Server(app);
io.attach(http);

const port = 8010;

http.listen(port, () => {
  console.log("Server is started");
});

const app = require("./app");
const http = require("http").Server(app)

const port = 8010

http.listen(port, () => {
    console.log('Server is started')
})



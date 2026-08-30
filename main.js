const http = require("http");
const server = http.createServer((req,res) => {
    res.end("Hello node.js!");
});
server.listen(3000);

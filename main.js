const http = require("http");

const server = http.createServer((req,res) => {


    if (req.url === "/"){
        res.end("Hello!");
    }

    else if (req.url === "/about") {
        res.end("This is about page.");
    }

    else if (req.url === "/api/todos") {
        res.end("Todo API");
    }

    else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(3000);

const http = require("http");

const server = http.createServer((req,res) => {

    if(req.method === "POST" && req.url === "/todo"){
        let body = "";

        req.on("data",(chunk) => {
            body += chunk;
        });

        req.on("end" , () => {
            console.log("受信したデータ:");
            console.log(body);

            res.end("Todo received!");
        });
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(3000);

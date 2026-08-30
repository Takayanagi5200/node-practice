const http = require("http");

const data = "Learn Node.js";

const options = {
    hostname: "localhost",
    port: 3000,
    path: "/todo",
    method: "POST", 
};

const req = http.request(options, function(res) {

    res.on("data", function(chunk) {
        console.log("サーバーからのレスポンス:");
        console.log(chunk.toString());
    });

});

req.write(data);//dataをサーバーに送る
req.end();//送信終わり!

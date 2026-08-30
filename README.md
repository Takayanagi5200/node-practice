main.jsをnodejsを使って実行するとwebサーバーを立つ、
ブラウザでhttp://localhost:3000にアクセスすると
Hello Node.js!が表示され、webサーバーにブラウザからアクセスできたことが確認できる

const http = require("http");
const server = http.createServer((req,res) => {
    res.end("Hello node.js!");
});
server.listen(3000);

require :node.jsに搭載されている。npmで読み込んだモジュールに対してJavaScript側で利用できるようにするためのメソッ.
モジュール一覧 https://qiita.com/aosan/items/82b0e86d8848cb092680

http.createServer([options][, requestListener])に関するリファレンス
https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener

foo(a[, b[, c]])とあれば　a必須　bオプション　cオプション　という認識で良い

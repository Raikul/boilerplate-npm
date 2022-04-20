var express = require('express');
var app = express();
console.log("Hello World");

/*let gg = function(req, res) {
  res.send('Hello Express');
}
app.get(/\//,gg);
*/

let absolutePath = __dirname + "/views/index.html";

let sf = function(req, res) {
  res.sendFile(absolutePath);
}

app.get(/\//,sf);


let staticPath = __dirname + "/public";


app.use(express.static(staticPath));

let jeyjey = {
    "message" : "Hello json"
  }
  let sjson = function(req,res)
  {
    res.json(jeyjey)
  }
  app.get("/json",sjson);
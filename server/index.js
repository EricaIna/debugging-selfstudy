const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello");
});
const port = 3000;
server.listen(3000, () => console.log("server ready"));

const app = require("./app");

app.listen(port, () => {
  console.log(`API listening on port ${port}.`);
});

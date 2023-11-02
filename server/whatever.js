const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
//const logger = require("./logger");
const quotes = require("./quotes");

const fs = require("fs");

app.use(cors());
app.use(express.json());
//app.use(logger);

app.get("/", (req, res) => {
  res.send(`Welcome to the quotes API! There are ${quotes.length} available.`);
});

app.get("/quotes", (req, res) => {
  console.log(quotes);
  res.json(quotes);
});

app.post("/quotes", (req, res) => {
  const newQuote = req.body;
  console.log(typeof quotes);
  quotes.push(req.body);
  //   fs.writeFileSync(
  //     "./data.js",
  //     `module.exports = ${JSON.stringify(quotes, null, 2)};`,
  //     "utf-8"
  //   );
  //   fs.writeFileSync("./your-file.json", JSON.stringify(quotes, null, 2));
  //   const newDataString = `module.exports = ${JSON.stringify(quotes, null, 2)};`;
  //   fs.writeFileSync("./data.js", newDataString);

  res.status(201).send(req.body);
});

app.get("/quotes/:author", (req, res) => {
  res.send(req.params);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

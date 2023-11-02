const express = require("express");
const app = express();

const cors = require("cors");
const logger = require("./logger");

//get data from quotes.js

const quotes = require("./quotes");

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  //res.send(`Welcome to the quotes API! There are ${quotes.length} available.`);
  console.log("Sasha");
  res.send("Haluuuuuu");
});

// // get all data from quotes.js
// app.get("/quotes", (req, res) => {
//   res.send(quotes);
// });

// //get romdom quotes (ramdom index)
// app.get("/quotes/random", (req, res) => {
//   const randIdx = Math.floor(Math.random() * quotes.length);
//   res.send(quotes[randIdx]);
// });

// app.get("/quotes/:id", (req, res) => {
//   const idx = req.params.id;
//   if (idx == undefined) {
//     res.status(404).send("there is a problem of ID");
//   } else {
//     res.send(idx);
//   }

//   res.send(quotes[idx]);
// });

// app.post("/quotes", (req, res) => {
//   const newQuote = req.body;

//   newQuote["id"] = quotes.length;

//   res.send(newQuote);
// });

module.exports = app;

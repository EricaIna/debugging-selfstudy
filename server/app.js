const express = require("express");
const cors = require("cors");
const logger = require("./logger");

//get data from quotes.js

const quotes = require("./quotes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

const port = 3000;

app.get("/", (req, res) => {
  res.send(`Welcome to the quotes API! There are ${quotes.length} available.`);
});

// get all data from quotes.js
app.get("/quotes", (req, res) => {
  res.send(quotes);
});

//get romdom quotes (ramdom index)
app.get("/quotes/random", (req, res) => {
  const randIdx = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randIdx]);
});

app.get("/quotes/:id", (req, res) => {
  const idx = req.params.id;
  res.send(quotes[idx]);
});

app.post("/quotes", (req, res) => {
  const newQuote = req.body;

  newQuote["id"] = quotes.length;

  res.send(newQuote);
});

module.exports = app;

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const transactionsController = require("./controllers/transactionsController");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.send("Welcome to Budget App!");
});

app.use("*", (req, res) => {
  res.status(404).send("Sorry, the page you requested cannot be found!");
});

module.exports = app;

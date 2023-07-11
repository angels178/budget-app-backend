const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let transactionsArray = require("../models/transaction");

// fetch the list of transactions
router.get("/", (req, res) => {
  res.json(transactionsArray);
});

// fetch a single transaction
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const matchID = transactionsArray.find((item) => item.id === id);

  if (!matchID) {
    res.status(404).json({
      status: false,
      message: "Id is not found",
    });
  } else {
    res.json({ status: true, data: matchID });
  }
});

// create a new transaction
router.post("/", (req, res) => {
  const transaction = req.body;

  if (!transaction) {
    res.status(400).json({ message: "Transaction is added!" });
  } else {
    const newTransaction = {
      id: uuidv4(),
      ...transaction,
    };

    transactionsArray.push(newTransaction);

    res.status(201).json({ status: true, data: newTransaction });
  }
});

// update the current transaction
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const transaction = req.body;

  const foundIndex = transactionsArray.findIndex((item) => item.id === id);

  if (foundIndex === -1) {
    res.status(404).json({ status: false, message: "Id is not found!" });
  } else {
    let foundTransaction = transactionsArray[foundIndex];

    let newBudgetObj = {
      ...foundTransaction,
      ...transaction,
    };

    transactionsArray.splice(foundIndex, 1, newBudgetObj);

    res.json({ status: true, message: "success", data: newBudgetObj });
  }
});

// delete a single transaction
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let foundIndex = transactionsArray.findIndex((item) => item.id === id);

  if (foundIndex === -1) {
    res.status(404).json({
      status: false,
      message: "Sorry, there is no transaction with this id is found!",
    });
  } else {
    let foundTransaction = transactionsArray[foundIndex];

    let newTransaction = transactionsArray.filter((item) => item.id !== id);

    transactionsArray = newTransaction;

    res.json({
      status: true,
      message: "success",
      data: foundTransaction,
    });
  }
});

module.exports = router;

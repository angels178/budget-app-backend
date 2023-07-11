const { v4: uuidv4 } = require("uuid");

module.exports = [
  {
    id: uuidv4(),
    item_name: "paycheck",
    amount: 2000,
    date: "2023-02-15",
    from: "employer",
    category: "salary",
  },
  {
    id: uuidv4(),
    item_name: "ice coffee",
    amount: -5.59,
    date: "2023-02-24",
    from: "Starbucks",
    category: "beverage",
  },
  {
    id: uuidv4(),
    item_name: "direct deposit",
    amount: 5000,
    date: "2023-04-23",
    from: "Charles Hemsworth",
    category: "income",
  },
  {
    id: uuidv4(),
    item_name: "rent",
    amount: 2050,
    date: "2023-05-07",
    from: "tenant",
    category: "rental income",
  },
  {
    id: uuidv4(),
    item_name: "ice cream birthday cake",
    amount: -24,
    date: "2023-06-30",
    from: "Carvel",
    category: "special occasion",
  },
  {
    id: uuidv4(),
    item_name: "firework",
    amount: -1000,
    date: "2023-07-01",
    from: "Costco Wholesale",
    category: "special occasion",
  },
];

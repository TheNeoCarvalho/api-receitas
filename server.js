const express = require("express");
const recipies = require("./receitas.json");

const app = express();

const ing = recipies;

app.get("/", function(req, res) {
  res.send("Api Receitas!");
});

app.get("/recipies", function(req, res) {
  res.send(ing);
});

app.listen(3000, function() {
  console.log("Listening on port 3000!");
});

const express = require("express");
const recipies = require("./receitas.json");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded());

const ing = recipies;

app.get("/", function(req, res) {
  const conta = ing.lengh;
  res.render("home", { conta });
});

app.get("/recipies", function(req, res) {
  res.send(ing);
});

app.listen(3000, function() {
  console.log("Listening on port 3000!");
});

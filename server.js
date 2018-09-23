require("dotenv").config();

// Dependencies 
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("./models");

require("./routes/apiRoutes.js")(app);
//require("./routes/htmlRoutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("🙌   OMG WE ARE CONNECTED TO PORT " + PORT + "! TIME TO FOLLW THAT 💸  💸  💸  !!!");
  });
});



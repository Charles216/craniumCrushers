require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require("./routes/apiRoutes.js")(app);
//require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("🌎 DO I LOVE " + PORT + " OR WHAT?!?🌎");
});
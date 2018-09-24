// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/individuals", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/individuals.html"));
    });

};

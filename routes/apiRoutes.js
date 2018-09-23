var db = require("../models");
module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/api/interest_groups", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.interestgroupname.findAll().then(function(dbInterestGroup) {
        // We have access to the todos as an argument inside of the callback function
        res.json(dbInterestGroup);
      });
    
    });
}
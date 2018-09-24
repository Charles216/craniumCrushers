var db = require("../models");
console.log('=============================', db.ear)
module.exports = function (app) {  
  
    // GET route for getting all of the interest groups
    app.get("/api/interestGroups", function (req, res) {
      // findAll returns all entries for a table when used with no options
      db.InterestGroup.findAll({
        include: [{
          where: {year: 2018},
          model: db.Year,
        }]
      }).then(function (dbInterestGroup) {
        // We have access to the interest as an argument inside of the callback function
        res.json(dbInterestGroup);
      });
    });
    // GET route for getting all of the individual donors
    app.get("/api/donors2018", function (req, res) {
      // findAll returns all entries for a table when used with no options
      db.cycle2018s.findAll().then(function (dbCycle2018) {
        // We have access to the interest as an argument inside of the callback function
        res.json(dbCycle2018);
      });
    });
    // GET route for getting all of the individual donors
    app.get("/api/donors2016", function (req, res) {
      // findAll returns all entries for a table when used with no options
      db.cycle2016s.findAll().then(function (dbCycle2016) {
        // We have access to the interest as an argument inside of the callback function
        res.json(dbCycle2016);
      });
    });
    // GET route for getting all of the individual donors
    app.get("/api/donors2014", function (req, res) {
      // findAll returns all entries for a table when used with no options
      db.cycle2014s.findAll().then(function (dbCycle2014) {
        // We have access to the interest as an argument inside of the callback function
        res.json(dbCycle2014);
      });
    });
    // GET route for getting all of the individual donors
    app.get("/api/donors2012", function (req, res) {
      // findAll returns all entries for a table when used with no options
      db.cycle2012s.findAll().then(function (dbCycle2012) {
        // We have access to the interest as an argument inside of the callback function
        res.json(dbCycle2012);
      });
    });
    // GET route for getting all of the individual donors
    app.get("/api/donors2010", function (req, res) {
      // findAll returns all entries for a table when used with no options
      db.cycle2010s.findAll().then(function (dbCycle2010) {
        // We have access to the interest as an argument inside of the callback function
        res.json(dbCycle2010);
      });
    });
  }

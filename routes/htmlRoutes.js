var path = require("path");

module.exports = function (app) {
    app.get("/independantspending", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/superpacpage.html"))
    })


  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  app.get("/graph", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/graph.html"));
  });

}
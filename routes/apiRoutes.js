var keys = require("../keys.js")
var request = require("request")
var FEC_key = keys.fec_api_key
var pageNum = 38;


callFecApi();

module.exports = function (app) {
    app.get("/data", function (req, res) {
        res.json(data)
    });
}

var data = [];
function callFecApi() {
    var queryURL = "https://api.open.fec.gov/v1/schedules/schedule_e/by_candidate/?cycle=2016&page=" + pageNum + "&per_page=100&api_key=" + FEC_key;
    request(queryURL, function (error, response, body) {
        if (!error) {
            console.log(JSON.parse(body));
            if (pageNum <= JSON.parse(body).pagination.pages) {
                data.push(JSON.parse(body));
                pageNum++
                callFecApi();
            } else {
                console.log("Page Number: " + pageNum)
                console.log("This is the data: " + data)
                return data
            }
        }
    });
} 
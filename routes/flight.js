const express = require("express");
const router = express.Router();
var unirest = require("unirest");


router.post("/flight", async (req, res) => {
    try {
        var request = unirest("GET", "https://google-flights-search.p.rapidapi.com/search");
let query = {};
if(req.body.departureDate) {
    query["departure_date"] = req.body.departureDate
}
query["departure_airport_code"] = req.body.departureCode;
query["arrival_airport_code"] = req.body.arrivalCode
        request.query(query);
        
        request.headers({
            "x-rapidapi-key": "20ba4a0a79mshfb2be2566e1b5c4p17d50bjsn67182507b2eb",
            "x-rapidapi-host": "google-flights-search.p.rapidapi.com",
            "useQueryString": true
        });
        

        request.end(function (response) {
            if (response.error) throw new Error(response.error);
        
            console.log(response.body);
            res.send(response.body);
        });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  });


router.post('/airport', (req,res) => {

    var request = unirest("GET", "https://airport-info.p.rapidapi.com/airport");

    request.query({
	"icao": req.body.code,
	"iata": req.body.code
});

request.headers({
	"x-rapidapi-key": "20ba4a0a79mshfb2be2566e1b5c4p17d50bjsn67182507b2eb",
	"x-rapidapi-host": "airport-info.p.rapidapi.com",
	"useQueryString": true
});


request.end(function (response) {
	if (response.error) throw new Error(response.error);

	console.log(response.body);
    res.send(response.body);
});
  })

  module.exports = router;



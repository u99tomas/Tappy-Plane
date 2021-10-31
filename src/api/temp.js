const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/temp", async (req, res) => {
  let openWeatherMap = "http://api.openweathermap.org/data/2.5/weather";
  let lat = req.query.lat || -31.7696804;
  let lon = req.query.lon || -60.8346743;

  let params = {
    lat: lat,
    lon: lon,
    units: "metric",
    APPID: "e235cd05d6004c0780d19a279349857d",
  };

  axios
    .get(openWeatherMap, { params })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  url =
    "http://api.weatherstack.com/current?access_key=8cb3b0e5f2041460b2630844770b9076&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude);
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("No connection to the weather service!", undefined);
    } else if (body.error) {
      callback("Not a valid Coordinate", undefined);
    } else {
      callback(undefined, 'It is '+ body.current.weather_descriptions +'. The temperature is '+ body.current.temperature +' degree and it feelslike '
        + body.current.feelslike +' degree outside.'
      );
    }
  });
};
module.exports = forecast
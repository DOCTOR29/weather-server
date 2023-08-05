const request = require("request");

const forecast = (latitude, longitude, callback) => {
  url =
    "http://api.weatherstack.com/current?access_key=" + process.env.WEATHERSTACK_API_KEY + "&query=" +
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
        + body.current.feelslike +' degree outside.'+'The Humidity is '+body.current.humidity +'%.'
      );
    }
  });
};
module.exports = forecast
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// var latitude, longitude;

// // Geocoding
// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Netanya.json?access_token=pk.eyJ1IjoidmFzc2VybWFuMjAwMCIsImEiOiJjanQ2OWdra3AwNWlvNDNtenpvOXJhenA1In0.64v1LxmIGdbMYtB6LVzwHg';

// request({ url: geoUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!\nError: ', error.code);
//     } else if (response.body.message) {
//         console.log(response.body.message);
//     } else if (response.body.features.length == 0) {
//         console.log('INVALID LOCATION');
//     }
//     else {
//         var mapboxResult = response;
//         var geoCoordinates = response.body.features[0].center;
//         longitude = geoCoordinates[0];
//         latitude = geoCoordinates[1];
//         const url = `https://api.darksky.net/forecast/2a82c8bdfe73c0c8788432b45fb9ee99/${latitude},${longitude}?units=si&lang=en`;
    
//         request({ url: url, json: true }, (error, response) => {
//             const currently = response.body.currently;
//             console.log(mapboxResult.body.features[0].text);
//             console.log(response.body.daily.data[0].summary + ' It is currently ', currently.temperature, ' degrees out. There is a', currently.precipProbability, '% chanse of rain. Humidity: ', currently.humidity);
//         });
//     }
// });


const displayWeather = function (city) {

    geocode(city, (error, coordinates) => {
        if (error) {
            return console.log(error);
        } else {
            forecast(error, coordinates);
        }
    }); 
};





displayWeather('netanya');


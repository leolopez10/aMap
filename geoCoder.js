// require("dotenv").config();
// const NodeGeocoder = require('node-geocoder');

// const options = {
//     provider: process.env.GEOCODER_PROVIDER,

//     // Optional depending on the providers
//     httpAdapter: 'https', // Default
//     apiKey: process.env.GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
//     formatter: null // 'gpx', 'string', ...
// };


// const geocoder = NodeGeocoder(options);

// function getAddress() {
//     geocoder.geocode('6301 Steer Trail')
//         .then(function(res) {
//             console.log(res);
//             //create an object that holds the user's inputed location
//             let chosenLocation = {

//                 formattedAddress: res[0].formattedAddress,
//                 longitude: res[0].longitude,
//                 latitude: res[0].latitude,
//                 street: res[0].streetName,
//                 city: res[0].city,
//                 state: res[0].stateCode,
//                 zipcode: res[0].zipcode
//             };
//             console.log(chosenLocation);
//             return chosenLocation;
//         })
//         .catch(function(err) {
//             console.log(err);
//         });
// }


// getAddress();
// // module.exports = geocoder;
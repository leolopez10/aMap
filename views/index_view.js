require("dotenv").config();
module.exports = function(props) {
    return `
    
    window.onload = function() {

        //Initiate API key
        L.mapquest.key = ${process.env.GEOCODER_API_KEY};
    
        //Define current location based of user input in the future
        var chosenLocation = {
            street: '${props.response.street}',
            city: '${props.response.city}',
            state: '${props.response.state}',
            postalCode: '${props.response.zipcode}'
        }
    
        //Run function create map using the user location
        L.mapquest.geocoding().geocode(chosenLocation, createMap);
    
        //Function to create map
        function createMap(error, response) {
            var location = response.results[0].locations[0];
            var latLng = location.displayLatLng;
            var map = L.mapquest.map('map', {
                center: latLng,
                layers: L.mapquest.tileLayer('map'),
                zoom: 18
            });
    
            //This creates a custom marker on the map
            var customIcon = L.mapquest.icons.circle({
                primaryColor: '#3b5998'
            });
    
            //This attaches the marker to the map
            L.marker(latLng, {
                icon: customIcon
            }).addTo(map);
    
        }
    }
    `
}
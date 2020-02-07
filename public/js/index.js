$("#search_b").on("click", function(event) {
    event.preventDefault();
    var userAddress = { address: $("#search_i").val().trim() };
    // console.log(userAddress);

    $.post("/", userAddress)
        .then(function(data) {
            console.log("/", data);
            $("#script").append(data);
            alert("We got your address haha")

        });
    // $.get("/map", userAddress);

});

//Initiate API key

window.onload = function() {

    L.mapquest.key = 'nkL6LFerG2cvr74dIKmAFOfVpGn5ACIZ';

    const map = L.mapquest.map('map', {
        center: [30.264979, -97.746598],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });

    var popup = L.popup();

    // function onMapClick(e) {
    //     popup
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(map);
    // }

    // map.on("click", onMapClick);


    map.on('click', function(e) {
        popup.setLatLng(e.latlng).openOn(this);
        L.mapquest.geocoding().reverse(e.latlng, generatePopupContent);
    });

    function generatePopupContent(error, response) {
        var location = response.results[0].locations[0];
        var street = location.street;
        var city = location.adminArea5;
        var state = location.adminArea3;
        popup.setContent(street + ', ' + city + ', ' + state);
    }
}





// window.onload = function() {

//     //Initiate API key
//     L.mapquest.key = 'nkL6LFerG2cvr74dIKmAFOfVpGn5ACIZ';

//     //Define current location based of user input in the future
//     var chosenLocation = {
//         street: '6301 Steer Trail',
//         city: 'Austin',
//         state: 'TX',
//         postalCode: '78749'
//     }

//     //Run function create map using the user location
//     L.mapquest.geocoding().geocode(chosenLocation, createMap);

//     //Function to create map
//     function createMap(error, response) {
//         var location = response.results[0].locations[0];
//         var latLng = location.displayLatLng;
//         var map = L.mapquest.map('map', {
//             center: latLng,
//             layers: L.mapquest.tileLayer('map'),
//             zoom: 18
//         });

//         //This creates a custom marker on the map
//         var customIcon = L.mapquest.icons.circle({
//             primaryColor: '#3b5998'
//         });

//         //This attaches the marker to the map
//         L.marker(latLng, {
//             icon: customIcon
//         }).addTo(map);

//         //This creates a pop up with the users address displayed, and it does not have a close button
//         var customPopUp = L.popup({
//                 closeButton: false
//             })
//             .setLatLng(latLng)
//             .setContent('<strong>' + chosenLocation.street + '\n' + chosenLocation.city + ', ' + chosenLocation.state + ' ' + chosenLocation.postalCode + '</strong>')
//             .openOn(map);
//     }
// }
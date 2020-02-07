module.exports = function(script) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- mapquest.js -->
        <script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
        <link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
        <script src="https://code.jquery.com/jquery.js"></script>
        <script type="text/javascript">
        $("#search_b").on("click", function(event) {
            event.preventDefault();
            var userAddress = { address: $("#search_i").val().trim() };
            console.log(userAddress);
        
            $.post("/", userAddress)
                .then(function(data) {
                    console.log("/", data);
                    alert("We got your address haha")
                });
        });
            ${script}
        </script>
        </script>
        <title>Map</title>
    </head>
    
    <body>
        <h1>Welcome to this part of the Map</h1>

        <form>
            <input type="text" name="search_i" id="search_i" placeholder="Address, Neighborhood, City, County">
            <button type="submit" id="search_b">Search</button>
        </form>
        
        <div id="map" style="width: 100%; height: 100vh;"></div>
    </body>
    
    
    </html>`
}
// Creating map object
const API_ONE = "pk.eyJ1Ijoia3VsaW5pIiwiYSI6ImNpeWN6bjJ0NjAwcGYzMnJzOWdoNXNqbnEifQ.jEzGgLAwQnZCv9rA6UTfxQ";

var myMap = L.map("map-crime", {
  center: [38.9072, -77.0369],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_ONE
}).addTo(myMap);

// Store API query variables
var baseURL = "/data"

// Grab the data with d3
d3.json(baseURL).then( function(response) {
  console.log(response);
  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {
    
    // Set the data location property to a variable
    // Check for location property
    // Add a new marker to the cluster group and bind a pop-up
    markers.addLayer(L.marker([response[i].LATITUDE, response[i].LONGITUDE]));
        //.bindPopup(response[i].descriptor + "<hr>" + response[i].cross_street_1 + "<br>" + response[i].cross_street_2));

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});

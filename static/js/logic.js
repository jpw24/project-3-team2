// Creating map object
const API_ONE = "pk.eyJ1Ijoia3VsaW5pIiwiYSI6ImNpeWN6bjJ0NjAwcGYzMnJzOWdoNXNqbnEifQ.jEzGgLAwQnZCv9rA6UTfxQ";

var myMap = L.map("map-crime", {
  center: [38.9072, -77.0369],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidGltbXltYXBzIiwiYSI6ImNqdGxvM2M0bTB1NXIzeXBnd3QxcGx3Mm0ifQ.IwW87rAiKtVg2uATox5ftg", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_ONE
}).addTo(myMap);

// Store API query variables

// Grab the data with d3
/*d3.json(baseURL).then(function (response) {
  //console.log(response);
  // Create a new marker cluster group

});*/

//INFO FOR JIMMY

var baseURL="/data"

var layer;
function buildCharts(filter) {
  var chart_url=baseURL.concat("?OFFENSE='",filter.offense,"'&WARD=",filter.ward.toString())
  console.log(filter.offense);
  //building the map
  d3.json(chart_url).then((response) => {
    var markers = L.markerClusterGroup();
    if (layer){
      layer.clearLayers();
    }
    // Loop through data
    for (var i = 0; i < response.length; i++) {
  
      // Set the data location property to a variable
      // Check for location property
      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([response[i].LATITUDE, response[i].LONGITUDE]))
        //.bindPopup("Shift: "+response[i].SHIFT);// + "<hr>" + response[i].cross_street_1 + "<br>" + response[i].cross_street_2);
  
    }
    layer=markers;

    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
    //markers.clearLayers();


  });
  //reena code
  //var reena_chart_url="/charts_data".concat("?OFFENSE='",filter.offense,"'&WARD=",filter.ward.toString())
  //d3.json(reena_chart_url).then((response)=>{

  //})

//  console.log(users)

}



//buildCharts();
/*const otu_ids = data.otu_ids;
const otu_labels = data.otu_labels;
const sample_values = data.sample_values;

// Build a Bubble Chart
var bubbleLayout = {
  margin: { t: 0 },
  hovermode: "closest",
  xaxis: { title: "OTU ID" }
};
var bubbleData = [
  {
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    mode: "markers",
    marker: {
      size: sample_values,
      color: otu_ids,
      colorscale: "Earth"
    }
  }
];

Plotly.plot("bubble", bubbleData, bubbleLayout);

// Build a Pie Chart
// HINT: You will need to use slice() to grab the top 10 sample_values,
// otu_ids, and labels (10 each).
var pieData = [
  {
    values: sample_values.slice(0, 10),
    labels: otu_ids.slice(0, 10),
    hovertext: otu_labels.slice(0, 10),
    hoverinfo: "hovertext",
    type: "pie"
  }
];

var pieLayout = {
  margin: { t: 0, l: 0 }
};

Plotly.plot("pie", pieData, pieLayout);
});
}

/* FILTERING EXAMPLE

var filter = {
address: 'England',
name: 'Mark'
};
var users = [{
name: 'John',
email: 'johnson@mail.com',
age: 25,
address: 'USA'
},
{
name: 'Tom',
email: 'tom@mail.com',
age: 35,
address: 'England'
},
{
name: 'Mark',
email: 'mark@mail.com',
age: 28,
address: 'England'
}
];










/* THIS COMBINE THE RESULTS OF TWO ENDPOINTS (AT THIS POINT I'M JUST TRYING TO PRINT DATA TO TEST)
****************************************************************************************/

/*function comboTest(ctype, ward){
  var url_ctype = `/type/${ctype}`
  var url_ward = `/location/${ward}`

d3.json(url_ctype).then(function(response) {
  console.log(response);
});
d3.json(url_ward).then(function(response) {
  console.log(response);
});
}
comboTest("HOMICIDE", 1) */

function init() {
  // Grab a reference to the dropdown select element
  var offenseSelector = d3.select("#selType");
  var wardSelector = d3.select("#selWard")

  // Use the list of sample names to populate the select options
  /*d3.json("/offense").then((offense_data)=>{
    offense_data.forEach((offense)=>{
      offenseSelector
        .append("option")
        .text(offense.OFFENSE)
        .property("value", offense.OFFENSE);
      });
      const firstOffense = offense_data[0].OFFENSE;
    });
    */
  d3.json("/ward_offense").then((data) => {
    //console.log(ward_data);
    data.ward.forEach((ward) => {
        //.append ALL here?
      wardSelector
        .append("option")
        .text(ward.Ward)
        .property("value", ward.Ward);
      });
    data.offense.forEach((offense)=>{
      offenseSelector
        .append("option")
        .text(offense.OFFENSE)
        .property("value",offense.OFFENSE)
    });
    //.append ALL here?
    // Use the first sample from the list to build the initial plots
    const firstWard = data.ward[0].Ward;
    const firstOffense = data.offense[0].OFFENSE;
    wardSelector.append("option").text("All").property("value","All");
    offenseSelector.append("option").text("All").property("value","All");
    var firstFilter = {
      offense: firstOffense,
      ward: firstWard
    };
    buildCharts(firstFilter); //??
  });

}

function filterSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select inputs from the filter dropdowns
  var offenseFilter = d3.select("#selType").node().value;
  console.log(offenseFilter);
  var wardFilter = d3.select("#selWard").node().value;
  console.log(wardFilter);

  var filter = {
    offense: offenseFilter,
    ward: wardFilter
  };

  // CALL THE BUILD CHARTS FUNCTION(S) PASSING IN THE FILTER
  buildCharts(filter); //or whatever the function is called
}

// EVENT LISTENER FOR PLOT DATA BUTTON
d3.select("#submit").on("click", filterSubmit);
init();
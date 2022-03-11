
  // Create the map with our layers.
  var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        'attribution': 'Map data &copy; OpenStreetMap contributors'
      })
    ]
  });
  
  // Add our "streetmap" tile layer to the map.
streetmap.addTo(map);

// Create an overlays object to add to the layer control.
var overlays = {
    "EV Stations": layers.EV_STATIONS,
    "EV Population": layers.EV_POPULATION
  };
  
// Create a control for our layers, and add our overlays to it.
L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map.
var info = L.control({
    position: "bottomright"
  });

// When the layer control is added, insert a div with the class of "legend".
info.onAdd = function() {
    var div = L.DomUtil.create("div", "legend");
    return div;
  };

// Add the info legend to the map.
info.addTo(map);

// Initialize an object that contains icons for each layer group.
var icons = {
    EV_STATIONS: L.ExtraMarkers.icon({
      icon: "ion-android-ev-station",
      iconColor: "white",
      markerColor: "yellow",
      shape: "circle"
    }),
    EV_POPULATION: L.ExtraMarkers.icon({
      icon: "ion-android-ev-vehicle",
      iconColor: "white",
      markerColor: "red",
      shape: "circle"
    })
};

var geojsonData = "ev_stations_v1.geojson";

var geojsonLayer = LgeoJson(geojsonData).addTo(map);
map.fitBounds(geojsonLayer.getBounds());


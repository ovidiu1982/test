// Create the tile layer that will be the background of our map.
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Initialize all the LayerGroups that we'll use.
var layers = {
  EV_HYBRID: new L.LayerGroup(),
  EV_BATTERY: new L.LayerGroup(),
  EV_STATIONS: new L.LayerGroup()
};

// Create the map with our layers.
var map = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12,
  layers: [
    layers.EV_HYBRID,
    layers.EV_BATTERY,
    layers.EV_STATIONS
  ]
});

// Add our "streetmap" tile layer to the map.
streetmap.addTo(map);

// Create an overlays object to add to the layer control.
var overlays = {
  "EV Hybrid": layers.EV_HYBRID,
  "EV Battery": layers.EV_BATTERY,
  "EV Population": layers.EV_STATIONS
};

// Create a control for our layers, and add our overlays to it.
L.control.layers(null, overlays).addTo(map);

// Initialize an object that contains icons for each layer group.
var icons = {
  EV_HYBRID: L.ExtraMarkers.icon({
    icon: "ion-android-electric-vehicle",
    iconColor: "white",
    markerColor: "yellow",
    shape: "circle"
  }),
  EV_BATTERY: L.ExtraMarkers.icon({
    icon: "ion-android-electric-vehicle",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  EV_STATIONS: L.ExtraMarkers.icon({
    icon: "ion-android-ev-station",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "circle"
  })
};

d3.json("Electric_Vehicle_Population_Data.geojson").then(function(infoRes) {

  // When the first API call completes, perform another call to the Citi Bike station status endpoint.
  d3.json("ev_stations_v1.geojson").then(function(statusRes) {
    var updatedAt = infoRes.last_updated;
    var stationStatus = statusRes.data.properties;
    var stationInfo = infoRes.data.properties;


    // Create an object to keep the number of markers in each layer.
    var stationCount = {
        EV_HYBRID: 0,
        EV_BATTERY: 0,
        EV_STATIONS: 0
    };

    // Initialize stationStatusCode, which will be used as a key to access the appropriate layers, icons, and station count for the layer group.
    var stationStatusCode;

    // Loop through the stations (they're the same size and have partially matching data).
    for (var i = 0; i < stationInfo.length; i++) {

       // Create a new station object with properties of both station objects.
       var station = Object.assign({}, stationInfo[i], stationStatus[i]);
       // If a station is listed but not installed, it's coming soon.
       if (station.electric_vehicle_type = 'Battery Electric Vehicle (BEV)') {
         stationStatusCode = "EV_BATTERY";
        }
       // If a station has no available bikes, it's empty.
       else if (station.electric_vehicle_type = 'Plug-in Hybrid Electric Vehicle (PHEV)') {
         stationStatusCode = "EV_HYBRID";
       }
       // Otherwise, the station is normal.
       else {
          stationStatusCode = "EV_STATIONS";
        }

       // Update the station count.
        stationCount[stationStatusCode]++;
       // Create a new marker with the appropriate icon and coordinates.
        var newMarker = L.marker([station.latitude, station.longitude], {
          icon: icons[stationStatusCode]
        });

    // Add the new marker to the appropriate layer.
    newMarker.addTo(layers[stationStatusCode]);

    // Bind a popup to the marker that will  display on being clicked. This will be rendered as HTML.
    newMarker.bindPopup(station.make + "<br> Model: " + station.model );
  }
});
});


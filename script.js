var map = L.map('map', {
  'center': [0, 0],
  'zoom': 0,
  'layers': [
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      'attribution': 'Map data &copy; OpenStreetMap contributors'
    })
  ]
});

var geojsonData = "Electric_Vehicle_Population_Data.geojson";

var geojsonLayer = L.geoJson(geojsonData).addTo(map);

map.fitBounds(geojsonLayer.getBounds());
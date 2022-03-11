var map = L.map('map', {
  'center': [0, 0],
  'zoom': 0,
  'layers': [
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      'attribution': 'Map data &copy; OpenStreetMap contributors'
    })
  ]
});

var geojsonData = "https://data.wa.gov/api/views/f6w7-q2d2/rows.json?accessType=DOWNLOAD";

var geojsonLayer = L.geoJson(geojsonData).addTo(map);

map.fitBounds(geojsonLayer.getBounds());
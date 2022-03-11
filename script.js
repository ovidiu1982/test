var map = L.map('map', {
    'center': [0, 0],
    'zoom': 0,
    'layers': [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        'attribution': 'Map data &copy; OpenStreetMap contributors'
      })
    ]
  });
  
  var geojsonData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.407748452,37.7837455690001]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.40746,37.78351]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.40723,37.7833400000001]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.40719,37.78331]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.40649,37.78274]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.40592,37.7823000000001]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.40521,37.7828700000001]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.40443,37.7835000000001]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.40433,37.78358]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.40373,37.78407]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.4033,37.7837400000001]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.4027,37.7832700000001]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-122.404118656,37.7821503430001]
        }
      }
    ]
  };
  
  var geojsonLayer = L.geoJson(geojsonData).addTo(map);
  
  map.fitBounds(geojsonLayer.getBounds());
  
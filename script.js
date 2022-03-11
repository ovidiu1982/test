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
       "coordinates":  [ -118.3879714,34.24831915 ]
    },
    "properties": {
    "Station_Name":"LADWP - Truesdale Center",
    "City":"Sun Valley",
    "State":"CA",
    "ZIP_Code":"91352",
    "Status_Code":"E",
    "EV_Network":"Non-Networked",
    "Owner_Type_Code":"LG",
    "EV_Level2_EVSE_Num":39,
    "Open_Date":"15/10/1999",
    "EV_Connector_Types":"CHADEMO J1772 J1772COMBO",
    "Facility_Type":"UTILITY",
    "EV_Pricing":""
    }
  }
    ]
  };
  
  var geojsonLayer = L.geoJson(geojsonData).addTo(map);
  
  map.fitBounds(geojsonLayer.getBounds());
  
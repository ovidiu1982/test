var map = L.map('map', {
    'center': [0, 0],
    'zoom': 0,
    'layers': [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        'attribution': 'Map data &copy; OpenStreetMap contributors'
      })
    ]
  });
  
  var geojsonData ={
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
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.448504,34.052542 ]
         },
         "properties": {
         "Station_Name":"LADWP - West LA District Office",
         "City":"Los Angeles",
         "State":"CA",
         "ZIP_Code":"90024",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":4,
         "Open_Date":"28/02/2020",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"UTILITY",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.271387,34.040539 ]
         },
         "properties": {
         "Station_Name":"Los Angeles Convention Center",
         "City":"Los Angeles",
         "State":"CA",
         "ZIP_Code":"90015",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":12,
         "Open_Date":"30/08/1995",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"PARKING_GARAGE",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.248589,34.059133 ]
         },
         "properties": {
         "Station_Name":"LADWP - John Ferraro Building",
         "City":"Los Angeles",
         "State":"CA",
         "ZIP_Code":"90012",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":311,
         "Open_Date":"15/10/1999",
         "EV_Connector_Types":"CHADEMO J1772 J1772COMBO",
         "Facility_Type":"UTILITY",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.096665,33.759802 ]
         },
         "properties": {
         "Station_Name":"LADWP - Haynes Power Plant",
         "City":"Long Beach",
         "State":"CA",
         "ZIP_Code":"90803",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":19,
         "Open_Date":"01/05/2018",
         "EV_Connector_Types":"CHADEMO J1772 J1772COMBO",
         "Facility_Type":"UTILITY",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -121.495022,38.576769 ]
         },
         "properties": {
         "Station_Name":"State Capitol Parking Garage",
         "City":"Sacramento",
         "State":"CA",
         "ZIP_Code":"95814",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"SG",
         "EV_Level2_EVSE_Num":9,
         "Open_Date":"15/10/1996",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"PARKING_GARAGE",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.265628,33.770508 ]
         },
         "properties": {
         "Station_Name":"LADWP - Harbor Generating Station",
         "City":"Wilmington",
         "State":"CA",
         "ZIP_Code":"90744",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":10,
         "Open_Date":"15/10/1999",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"UTILITY",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.480505,34.30309 ]
         },
         "properties": {
         "Station_Name":"LADWP - Sylmar West",
         "City":"Sylmar",
         "State":"CA",
         "ZIP_Code":"91342",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":2,
         "Open_Date":"01/01/2016",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"UTILITY",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.227605,34.066801 ]
         },
         "properties": {
         "Station_Name":"LADWP - EV Service Center",
         "City":"Los Angeles",
         "State":"CA",
         "ZIP_Code":"90012",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":46,
         "Open_Date":"15/10/1999",
         "EV_Connector_Types":"CHADEMO J1772",
         "Facility_Type":"UTILITY",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.368841,34.036777 ]
         },
         "properties": {
         "Station_Name":"LADWP - Fairfax Center",
         "City":"Los Angeles",
         "State":"CA",
         "ZIP_Code":"90016",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":13,
         "Open_Date":"01/04/2019",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"UTILITY",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.064,34.06872 ]
         },
         "properties": {
         "Station_Name":"California Air Resources Board",
         "City":"El Monte",
         "State":"CA",
         "ZIP_Code":"91731",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"SG",
         "EV_Level2_EVSE_Num":3,
         "Open_Date":"15/10/1996",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"STATE_GOV",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.236065,34.039736 ]
         },
         "properties": {
         "Station_Name":"LADWP - Palmetto Center",
         "City":"Los Angeles",
         "State":"CA",
         "ZIP_Code":"90013",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":10,
         "Open_Date":"15/10/1999",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"UTILITY",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -117.243,32.89947 ]
         },
         "properties": {
         "Station_Name":"Scripps Green Hospital",
         "City":"La Jolla",
         "State":"CA",
         "ZIP_Code":"92037",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":1,
         "Open_Date":"30/07/1997",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"HOSPITAL",
         "EV_Pricing":"Pay to Park"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.468371,34.221665 ]
         },
         "properties": {
         "Station_Name":"Galpin Motors",
         "City":"Sepulveda",
         "State":"CA",
         "ZIP_Code":"91343",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":2,
         "Open_Date":"11/12/2012",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"CAR_DEALER",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -117.459053,33.909914 ]
         },
         "properties": {
         "Station_Name":"Galleria at Tyler",
         "City":"Riverside",
         "State":"CA",
         "ZIP_Code":"92503",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":4,
         "Open_Date":"30/08/1997",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"SHOPPING_MALL",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.147111,34.14762 ]
         },
         "properties": {
         "Station_Name":"City of Pasadena - Holly Street Garage",
         "City":"Pasadena",
         "State":"CA",
         "ZIP_Code":"91103",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":16,
         "Open_Date":"30/08/1997",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"PARKING_GARAGE",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.152655,34.145138 ]
         },
         "properties": {
         "Station_Name":"City of Pasadena - De Lacey Garage",
         "City":"Pasadena",
         "State":"CA",
         "ZIP_Code":"91105",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":2,
         "Open_Date":"30/08/1997",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"PARKING_GARAGE",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.150133,34.145119 ]
         },
         "properties": {
         "Station_Name":"City of Pasadena - Schoolhouse Garage",
         "City":"Pasadena",
         "State":"CA",
         "ZIP_Code":"91105",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":3,
         "Open_Date":"30/08/1997",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"PARKING_GARAGE",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.140553,34.142973 ]
         },
         "properties": {
         "Station_Name":"Pasadena Hilton",
         "City":"Pasadena",
         "State":"CA",
         "ZIP_Code":"91101",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":4,
         "Open_Date":"31/08/1997",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"HOTEL",
         "EV_Pricing":"Free; parking fee"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.149597,34.118433 ]
         },
         "properties": {
         "Station_Name":"Bristol Farms",
         "City":"South Pasadena",
         "State":"CA",
         "ZIP_Code":"91030",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":null,
         "Open_Date":"31/08/1997",
         "EV_Connector_Types":"",
         "Facility_Type":"GROCERY",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.192,33.7637 ]
         },
         "properties": {
         "Station_Name":"Hyatt Regency Long Beach",
         "City":"Long Beach",
         "State":"CA",
         "ZIP_Code":"90802",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":1,
         "Open_Date":"04/05/2012",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"HOTEL",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.403342,33.94325 ]
         },
         "properties": {
         "Station_Name":"Los Angeles International Airport (LAX) - Lot 6",
         "City":"Los Angeles",
         "State":"CA",
         "ZIP_Code":"90045",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":20,
         "Open_Date":"30/06/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"AIRPORT",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.556708,34.241116 ]
         },
         "properties": {
         "Station_Name":"Northridge Fashion Center - Yard House",
         "City":"Northridge",
         "State":"CA",
         "ZIP_Code":"91324",
         "Status_Code":"E",
         "EV_Network":"Volta",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":2,
         "Open_Date":"30/05/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"SHOPPING_MALL",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -117.575,34.07122 ]
         },
         "properties": {
         "Station_Name":"Ontario Airport Hotel and Conference Center",
         "City":"Ontario",
         "State":"CA",
         "ZIP_Code":"91764",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":1,
         "Open_Date":"15/06/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"HOTEL",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -119.170865,34.228315 ]
         },
         "properties": {
         "Station_Name":"Courtyard Marriott - Oxnard Ventura",
         "City":"Oxnard",
         "State":"CA",
         "ZIP_Code":"93030",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":1,
         "Open_Date":"30/05/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"HOTEL",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -116.543589,33.824004 ]
         },
         "properties": {
         "Station_Name":"Hilton - Palm Springs",
         "City":"Palm Springs",
         "State":"CA",
         "ZIP_Code":"92262",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":2,
         "Open_Date":"12/12/2011",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"HOTEL",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -121.876172,37.700187 ]
         },
         "properties": {
         "Station_Name":"East Bay Mini",
         "City":"Pleasanton",
         "State":"CA",
         "ZIP_Code":"94588",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":2,
         "Open_Date":"14/12/2012",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"CAR_DEALER",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -117.38,34.0189 ]
         },
         "properties": {
         "Station_Name":"Inland Empire Foods",
         "City":"Riverside",
         "State":"CA",
         "ZIP_Code":"92509",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":3,
         "Open_Date":"30/05/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"OFFICE_BLDG",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -121.58889,38.69005 ]
         },
         "properties": {
         "Station_Name":"Sacramento International Airport - Daily A Lot",
         "City":"Sacramento",
         "State":"CA",
         "ZIP_Code":"95837",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":4,
         "Open_Date":"30/06/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"AIRPORT",
         "EV_Pricing":"$12 parking fee"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.44704,34.017081 ]
         },
         "properties": {
         "Station_Name":"City of Santa Monica - Airport",
         "City":"Santa Monica",
         "State":"CA",
         "ZIP_Code":"90405",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":2,
         "Open_Date":"30/06/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"AIRPORT",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.49583,34.010021 ]
         },
         "properties": {
         "Station_Name":"City of Santa Monica - Pier",
         "City":"Santa Monica",
         "State":"CA",
         "ZIP_Code":"90405",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":3,
         "Open_Date":"08/04/2019",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"MUNI_GOV",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.434454,34.156839 ]
         },
         "properties": {
         "Station_Name":"Westfield Fashion Square",
         "City":"Sherman Oaks",
         "State":"CA",
         "ZIP_Code":"91423",
         "Status_Code":"E",
         "EV_Network":"Volta",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":4,
         "Open_Date":"30/05/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"SHOPPING_CENTER",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.35904,34.138717 ]
         },
         "properties": {
         "Station_Name":"Universal City Hilton",
         "City":"Universal City",
         "State":"CA",
         "ZIP_Code":"91608",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":null,
         "Open_Date":"30/05/1998",
         "EV_Connector_Types":"NEMA520",
         "Facility_Type":"HOTEL",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.448704,34.21108 ]
         },
         "properties": {
         "Station_Name":"Van Nuys Amtrak/Metrolink Station",
         "City":"Van Nuys",
         "State":"CA",
         "ZIP_Code":"91405",
         "Status_Code":"E",
         "EV_Network":"EV Connect",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":4,
         "Open_Date":"30/06/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"PARKING_LOT",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -118.153806,33.94756 ]
         },
         "properties": {
         "Station_Name":"Office Max - Home Depot",
         "City":"Downey",
         "State":"CA",
         "ZIP_Code":"90241",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"T",
         "EV_Level2_EVSE_Num":4,
         "Open_Date":"15/06/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"SHOPPING_CENTER",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -122.4152,37.80619 ]
         },
         "properties": {
         "Station_Name":"Hyatt at Fisherman's Wharf",
         "City":"San Francisco",
         "State":"CA",
         "ZIP_Code":"94133",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":1,
         "Open_Date":"01/07/1998",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"HOTEL",
         "EV_Pricing":"Free"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -121.427045,38.599693 ]
         },
         "properties": {
         "Station_Name":"Arden Fair Mall",
         "City":"Sacramento",
         "State":"CA",
         "ZIP_Code":"95815",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"P",
         "EV_Level2_EVSE_Num":4,
         "Open_Date":"01/11/2019",
         "EV_Connector_Types":"J1772",
         "Facility_Type":"SHOPPING_MALL",
         "EV_Pricing":""
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -122.430237,37.784912 ]
         },
         "properties": {
         "Station_Name":"Japan Center Garage",
         "City":"San Francisco",
         "State":"CA",
         "ZIP_Code":"94115",
         "Status_Code":"E",
         "EV_Network":"Non-Networked",
         "Owner_Type_Code":"LG",
         "EV_Level2_EVSE_Num":null,
         "Open_Date":"31/01/2002",
         "EV_Connector_Types":"",
         "Facility_Type":"PARKING_GARAGE",
         "EV_Pricing":""
         }
       }
    ]
  };
  
  var geojsonLayer = L.geoJson(geojsonData).addTo(map);
  
  map.fitBounds(geojsonLayer.getBounds());
  
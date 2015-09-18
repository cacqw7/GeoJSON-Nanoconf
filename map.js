$(function(){

  //Initializing the map with the ([Latitude, Longitude], Zoom Level)
  var map = L.map('map').setView([37.8, -96], 4);

  //Choose a tile source (more can be seen in map_constants.js)
  tileSource = tileSources.transport;

  //Creating a tile Layer from the source
  tileLayer = L.tileLayer(tileSource.url, {
    maxZoom: 19,
    attribution: tileSource.attribution
  });

  //Add it to the map
  tileLayer.addTo(map);

  //Set our geojson to a variable and add it to the map
  geoStates = L.geoJson(statesData)
  geoStates.addTo(map)
})

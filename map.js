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
//----------------------------------------------------


  function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

  var highlightFeature = function(e) {
    var layer = e.target;
    if (layer) {
      layer.setStyle({
       weight: 5,
       color: '#666',
       dashArray: '',
       fillOpacity: 0.7
     });
    }
    layer.bringToFront();
    // info.update(layer.feature.properties);
  };

  var removeHighlight = function(e) {
    layer = e.target;
    geoStates.resetStyle(e.target);
    // info.update();
  };

  var onEachFeature = function(feature, layer) {
    layer.setStyle(defaultStyle);
    layer.on({
      // mouseover: highlightFeature,
      // mouseout: removeHighlight
    });
  };


  //Set our geojson to a variable and add it to the map
  geoStates = L.geoJson(statesData,
    {
      onEachFeature: onEachFeature
      // style: style
    }
  )
  geoStates.addTo(map)


  //----------------------------------

  // var info = L.control();
  //
  // info.onAdd = function (map) {
  //     this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  //     this.update();
  //     return this._div;
  // };
  //
  // // method that we will use to update the control based on feature properties passed
  // info.update = function (props) {
  //     this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
  //         '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
  //         : 'Hover over a state');
  // };
  //
  // info.addTo(map);

  //----------------------------------


  // var legend = L.control({position: 'bottomright'});
  //
  // legend.onAdd = function (map) {
  //
  //     var div = L.DomUtil.create('div', 'info legend'),
  //         grades = [0, 10, 20, 50, 100, 200, 500, 1000],
  //         labels = [];
  //
  //     // loop through our density intervals and generate a label with a colored square for each interval
  //     for (var i = 0; i < grades.length; i++) {
  //         div.innerHTML +=
  //             '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
  //             grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  //     }
  //
  //     return div;
  // };
  //
  // legend.addTo(map);
})

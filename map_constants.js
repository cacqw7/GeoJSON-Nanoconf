var defaultStyle = {
  color: "#2262CC",
  weight: 2,
  opacity: 0.6,
  fillOpacity: 0.1,
  fillColor: "#2262CC"
};


// More here: http://leaflet-extras.github.io/leaflet-providers/preview/
var tileSources = {
  mapkik: {
    url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  bw: {
    url: "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  hot: {
    url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  transport: {
    url: 'http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  roads: {
    url: 'http://openmapsurfer.uni-hd.de/tiles/roads/x={x}&y={y}&z={z}',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  full: {
    url: 'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
};

var getColor = function (d) {
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
}

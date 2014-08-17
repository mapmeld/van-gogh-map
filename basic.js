mapboxgl.accessToken = "pk.eyJ1IjoibWFwbWVsZCIsImEiOiI0a1NzYW53In0.2gQTd6k9Ghw8UBK4DsciLA";
var map = new mapboxgl.Map({
    container: 'map',
    center: [42, -75],
    zoom: 15,
    style: {
  "version": 4,
  "constants": {},
  "sources": {
    "mapbox": {
      "type": "vector",
      "url": "mapbox://mapbox.mapbox-terrain-v1,mapbox.mapbox-streets-v6-dev",
      "maxZoom": 15
    }
  },
  "layers": [
    {
      "id": "background",
      "style": {
        "background-color": "#fff"
      },
      "type": "background"
    },
    {
      "id": "water",
      "source": "mapbox",
      "source-layer": "water",
      "style": {
        "fill-outline-color": "#a2bdc0"
      },
      "type": "fill"
    }
  ]
},
    hash: true
});
$(document).ready(function(){
mapboxgl.accessToken = "pk.eyJ1IjoibWFwbWVsZCIsImEiOiI0a1NzYW53In0.2gQTd6k9Ghw8UBK4DsciLA";
var map = new mapboxgl.Map({
    container: 'map',
    center: [42, -75],
    zoom: 15,
    style: {
  "version": 4,
  "sprite": "https://www.mapbox.com/mapbox-gl-styles/sprites/outdoors",
  "glyphs": "https://mapbox.s3.amazonaws.com/gl-glyphs-256/{fontstack}/{range}.pbf",
  "constants": {
  },
  "sources": {
    "mapbox": {
      "type": "vector",
      "url": "mapbox://mapbox.mapbox-terrain-v1,mapbox.mapbox-streets-v6-dev",
      "maxZoom": 15
    }
  },
  "layers": [{
    "id": "background",
    "style": {
      "background-color": "#fff"
    },
    "type": "background"
  }, {
    "id": "landcover_snow",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "snow" },
    "style": {
      "fill-image": "url('snow.png')"
    },
    "type": "fill"
  }, {
    "id": "landcover_crop",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "crop" },
    "style": {
      "fill-image": "url('farm.png')"
    },
    "type": "fill"
  }, {
    "id": "landcover_grass",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "grass" },
    "style": {
      "fill-image": "url('grass.png')"
    },
    "type": "fill"
  }, {
    "id": "landcover_wood",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "wood" },
    "style": {
      "fill-image": "url('wood.png')"
    },
    "type": "fill"
  }, {
    "id": "landuse_wood",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "wood" },
    "style": {
      "fill-image": "url('wood.png')"
    },
    "type": "fill"
  }, {
    "id": "water",
    "source": "mapbox",
    "source-layer": "water",
    "style": {
      "fill-image": "url('water.png')",
      "fill-outline-color": "#a2bdc0"
    },
    "type": "fill"
  }]
},
    hash: true
});

var source = new mapboxgl.Source({
  type: "vector",
  url: "mapbox://mapbox.mapbox-streets-v5",
  tileSize: 512
});
map.addSource('osm', source);

$("select").on("change", function(e){
  var layer = $(e.target).attr("id");
  map.setStyle({});
});
});
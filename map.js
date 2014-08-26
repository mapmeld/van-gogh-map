$(document).ready(function(){
mapboxgl.accessToken = "pk.eyJ1IjoibWFwbWVsZCIsImEiOiI0a1NzYW53In0.2gQTd6k9Ghw8UBK4DsciLA";
var map = new mapboxgl.Map({
    container: 'map',
    center: [42.786, -73.26],
    zoom: 6,
    style: {
  "version": 4,
  "sprite": "sprite",
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
      "fill-image": "snow"
    },
    "type": "fill"
  },
  {
    "id": "landcover_crop",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "crop" },
    "style": {
      "fill-image": "farm"
    },
    "type": "fill"
  }, {
    "id": "landcover_grass",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "grass" },
    "style": {
      "fill-image": "grass"
    },
    "type": "fill"
  }, {
    "id": "landcover_wood",
    "source": "mapbox",
    "source-layer": "landcover",
    "filter": { "class": "wood" },
    "style": {
      "fill-image": "wood"
    },
    "type": "fill"
  }, {
    "id": "landuse_wood",
    "source": "mapbox",
    "source-layer": "landuse",
    "filter": { "class": "wood" },
    "style": {
      "fill-image": "wood"
    },
    "type": "fill"
  }, {
    "id": "water",
    "source": "mapbox",
    "source-layer": "water",
    "style": {
      "fill-image": "water",
      "fill-outline-color": "#a2bdc0"
    },
    "type": "fill"
  },
{
"id": "landuse_park",
"source": "mapbox",
"source-layer": "landuse",
"filter": {
"class": "park"
},
"style": {
"fill-image": "grass"
},
"type": "fill"
},
{
"id": "landuse_industrial",
"source": "mapbox",
"source-layer": "landuse",
"filter": {
"class": "industrial"
},
"style": {
"fill-image": "urban"
},
"type": "fill"
},
{
"id": "residential",
"source": "mapbox",
"source-layer": "landuse",
"filter": {
"class": "residential"
},
"style": {
"fill-image": "urban"
},
"type": "fill"
},
{
"id": "building",
"source": "mapbox",
"source-layer": "building",
"style": {
"fill-image": "urban"
},
"type": "fill"
},
{
"id": "commercial",
"source": "mapbox",
"source-layer": "landuse",
"filter": {
"class": "commercial"
},
"style": {
"fill-image": "urban"
},
"type": "fill"
},

{
"id": "landuse_grass",
"source": "mapbox",
"source-layer": "landuse",
"filter": {
"class": "grass"
},
"style": {
"fill-image": "grass"
},
"type": "fill"
},
{
"id": "landuse_crop",
"source": "mapbox",
"source-layer": "landuse",
"filter": {
"class": "crop"
},
"style": {
"fill-image": "farm"
},
"type": "fill"
},
{
"id": "landuse_rock",
"source": "mapbox",
"source-layer": "landuse",
"filter": {
"class": "rock"
},
"style": {
"fill-image": "rock"
},
"type": "fill"
},
{
"id": "landuse_snow",
"source": "mapbox",
"source-layer": "landuse",
"filter": {
"class": "snow"
},
"style": {
"fill-image": "snow"
},
"type": "fill"
}
  
  
  
  ]
},
    hash: true
});

$("select").on("change", function(e){
  var layer = $(e.target).attr("id");
  map.setStyle({});
});
});

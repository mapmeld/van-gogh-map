$(document).ready(function(){
mapboxgl.accessToken = "pk.eyJ1IjoibWFwbWVsZCIsImEiOiI0a1NzYW53In0.2gQTd6k9Ghw8UBK4DsciLA";
var map = new mapboxgl.Map({
    container: 'map',
    center: [42, -71],
    zoom: 15,
    style: "mss.json",
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
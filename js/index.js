import { MY_MAP_KEY } from 'config';

// Function for adding a marker to the page.
function addMarker(location) {
  marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

function TestMarker() {
  sugar = new google.maps.LatLng(29.59958, 95.61409);
  addMarker(sugar);
}


document.addEventListener('DOMContentLoaded', function () {  
  var js_file = document.createElement('script');
  js_file.type = 'text/javascript';
  js_file.src = `https://maps.googleapis.com/maps/api/js?key=${MY_MAP_KEY}&callback=initMap`
  document.getElementsByTagName('head')[0].appendChild(js_file);
});

function initMap() {  
  var initLoc = { lat: 26.139000, lng: -97.625381 };
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: initLoc,
    zoom: 10,
    mapTypeId: "roadmap",
  });
}


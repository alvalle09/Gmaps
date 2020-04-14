
      function initMap() {
        var harlingen = { lat: 26.190651, lng: -97.696114 };
        map = new google.maps.Map(document.getElementById("map"), {
          center: harlingen,
          zoom: 11,
          mapTypeId: "roadmap",
        });
      }
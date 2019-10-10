document.addEventListener('DOMContentLoaded', function () {

 let position1 = {
     lat: 51.5,
     lng: -0.1
 };
 let mapOptions = {
     center: position1,
     zoom: 7,
     mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 let map = new google.maps.Map(document.getElementById('map'), mapOptions);


 let markers = [];
 map.addListener("click", function (event) {
     console.log("oi");
     let markerOptions = {
         position: event.latLng,
         //map: map
     };
     let marker = new google.maps.Marker(markerOptions);
     markers.push(marker);
     console.log(markers);

 });

document.getElementById("showMarkers").addEventListener("click", showMarkers);

function showMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
}

document.getElementById("hideMarkers").addEventListener("click", hideMarkers);

function hideMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}

document.getElementById("deleteMarkers").addEventListener("click", deleteMarkers);

function deleteMarkers() {
    for (var i = 0; i < markers.length; i++) {
       hideMarkers();
       markers = [];
    }
}

}, false);
   
 
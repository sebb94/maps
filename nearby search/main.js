$(function () {

 let position1 = {
     lat: 49.6183,
     lng: 20.6995
 };
 let mapOptions = {
     center: position1,
     zoom: 13,
     mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 let map = new google.maps.Map(document.getElementById('map'), mapOptions);

    let infoWindow = new google.maps.InfoWindow();



 let request = {
     location: position1,
     radius: '10000',
     types: ['store']
 }

let service = new google.maps.places.PlacesService(map);

service.nearbySearch(request, callback);



document.getElementById("showStrores").addEventListener("click", showStrores);
function callback(result, status) {  

    if( status == google.maps.places.PlacesServiceStatus.OK){
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            addMarker(result[i]);
        }
    }

}

function addMarker(place) {
   let marker = new google.maps.Marker({
        map: map, 
        position: place.geometry.location,
        animation: google.maps.Animation.DROP
   });

   google.maps.event.addListener(marker, "click", function(){

    infoWindow.setContent(place.name);
    infoWindow.open(map, marker);

   });

}

});
   
 
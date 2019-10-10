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


document.getElementById("calcRoute").addEventListener("click", calcRoute);

let directionsService = new google.maps.DirectionsService();

let directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);

function calcRoute() {
   
    let request = {
        origin: "New York",
        destination: "Toroto",
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }

    directionsService.route(request, function (result, status) {
        if(status == google.maps.DirectionsStatus.OK){
            console.log(result);
            console.log("Długosć trasy: " + result.routes[0].legs[0].distance.text);
            console.log("Czas trasy: "  + result.routes[0].legs[0].duration.text);
            directionsDisplay.setDirections(result);
        }
    });


}

}, false);
   
 
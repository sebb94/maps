$(function () {

 let position1 = {
     lat: 49.6183,
     lng: 20.6995
 };
 let mapOptions = {
     center: position1,
     zoom: 7,
     mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 let map = new google.maps.Map(document.getElementById('map'), mapOptions);

 let inputOrigin = document.getElementById("origin");
 let optionsOrigin = {
     types: ["(cities)"]
 }
 let autocompleteOrigin = new google.maps.places.Autocomplete(inputOrigin, optionsOrigin);
autocompleteOrigin.addListener('place_changed', onOriginChanged);
 function onOriginChanged(){
  from = autocompleteOrigin.getPlace();
  from = from.formatted_address;
 }
  let inputTo = document.getElementById("to");
  let optionsTo = {
      types: ["(cities)"]
  }
  let autocompleteTo = new google.maps.places.Autocomplete(inputTo, optionsTo);
  autocompleteTo.addListener('place_changed', onToChanged);
  function onToChanged() {
     to = autocompleteTo.getPlace();
     to = to.formatted_address;

  }
//console.log(from);
//console.log(to);

document.getElementById("calcRoute").addEventListener("click", calcRoute);

let directionsService = new google.maps.DirectionsService();

let directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);

function calcRoute() {

    let request = {
        origin: from,
        destination: to,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }

    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            console.log(result);
            console.log("Długosć trasy: " + result.routes[0].legs[0].distance.text);
            console.log("Czas trasy: " + result.routes[0].legs[0].duration.text);
            $("#output").html(`  Route Length: ${result.routes[0].legs[0].distance.text} <br>
                 Route time: ${result.routes[0].legs[0].duration.text}   
            `);
            directionsDisplay.setDirections(result);
        }else{
            alert('xxx');
        }
    });


}
});
   
 
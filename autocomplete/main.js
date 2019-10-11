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

 let input = document.getElementById("city");
 let options = {
     types: ["(cities)"]
 }
 let autocomplete = new google.maps.places.Autocomplete(input, options );
  
 autocomplete.addListener('place_changed',onPlaceChanged);
   
 

 function onPlaceChanged(){
  place = autocomplete.getPlace();

  map.panTo(place.geometry.location);
 }

});
   
 
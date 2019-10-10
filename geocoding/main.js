$(function () {

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


document.getElementById("geocodeAdress").addEventListener("click", geocodeAdress);
document.getElementById("geocodeAdressFull").addEventListener("click", geocodeAdressFull);

let geocoder = new google.maps.Geocoder();

function geocodeAdress() {
   
    geocoder.geocode({"address" : document.getElementById('address').value}, function(result, status){

        if( status == google.maps.GeocoderStatus.OK ) {
            console.log(result);
            let adrres = result[0].geometry.location;
            console.log( "ADRESS COORDINATES" + result[0].geometry.location);
            map.setCenter(adrres);
            let marker = new google.maps.Marker({
                map: map,
                position : adrres
            })
        }else{
            alert("Geocode not successfull - " + status);
        }


    });
}
function geocodeAdressFull() {
let url = "https://maps.googleapis.com/maps/api/geocode/json?address="+document.getElementById("address").value+"&key="+key;

$.getJSON(url, function(data){

    if(data.status == "OK"){
        console.log(data);
    } else{
        $("#output").text("Bad request");
    }
});
}

});
   
 
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
var marker = new google.maps.Marker({
    map: map
});
function geocodeAdressFull() {
let url = "https://maps.googleapis.com/maps/api/geocode/json?address="+document.getElementById("address").value+"&key="+key;

$.getJSON(url, function(data){

    if(data.status == "OK"){
        console.log(data);
        let formattedAddress = data.results[0].formatted_address;
        let lat = data.results[0].geometry.location.lat;
        let lng = data.results[0].geometry.location.lng;
        let postcode;
        console.log(formattedAddress);
        console.log(lat);
        console.log(lng);
        $.each(data.results[0].address_components, function (index, element) {

            if(element.types == 'postal_code'){
                    postcode = element.long_name;
                    return false;
            }
        
        });

            console.log(postcode);
            $("#output").html(`<b>Formatted Address</b> ${formattedAddress} <br> <b>Coordinates:</b> lat: ${lat}, lng: ${lng} <br> Postalcode ${postcode} `);
            map.setCenter({lat:lat, lng:lng});
            map.setZoom(16);
           
            if (marker != undefined) {
                marker.setMap(null);
            }
             marker = new google.maps.Marker({
                 position: {
                     lat: lat,
                     lng: lng
                 },
                 map: map
            });
            
            console.log(marker + "oi");
            
    } else{
        $("#output").text("Bad request");
    }
});
}

});
   
 
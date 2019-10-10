setTimeout(function () {
    let position1 = {lat: 51.5, lng: -0.1};
    let position2 = { lat: 52.1337, lng: -0.4577 };
    console.log(position1);
    let mapOptions = {
        center: position1,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);

    let marker1Options = {
        position: position1,
        map: map,
        title: "This is London",
        draggable: true,
        animation: google.maps.Animation.DROP
    };
    let marker2Options = {
        position: position2,
        title: "This is Bedford",
        draggable: true,
        animation: google.maps.Animation.DROP
    };

    let marker1 = new google.maps.Marker(marker1Options);
    let marker2 = new google.maps.Marker(marker2Options);
    marker2.setMap(map)
    marker2.setAnimation(google.maps.Animation.BOUNCE);
    marker1.addListener("click", function () {
        infoWindow.open(map, marker1);
    });

    let contentSting = "<h3>This is text</h3>";

    let infoWindow = new google.maps.InfoWindow({
        content: contentSting,
        maxWidth: 100,
    });
    google.maps.event.addListener(marker1, 'dragend', function (event) {
        var lat = marker1.getPosition().lat();
        var lng = marker1.getPosition().lng();
        console.log(lat + " "+ lng);
    });

}, 500);


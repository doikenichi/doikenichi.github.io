$(function () {

});


function initMap() {
    var shizenLoc = new google.maps.LatLng({lat: -23.336909, lng: -51.163048});
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: shizenLoc,
        zoom: 16,
        panControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: shizenLoc,
        map: map
    });

    var contentString = '<div class="info-window">' +
            '<h3>Shizen Day Spa</h3>' +
            '<div class="info-content">' +
            '<p>Você é nosso convidado para conhecer nossa unidade e se surpreender!</p>'+
            '<p>Você será muito bem vindo!</p>' +
            '</div>' +
            '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

    map.set('styles', styles);



    /*var marker = new google.maps.Marker({
        position: shizenLoc,
        map: map
    });*/
};
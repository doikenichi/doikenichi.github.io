$(function () {

});


function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var myLatLng = new google.maps.LatLng({lat: -23.336909, lng: -51.163048});

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
};
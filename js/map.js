function initMap() {
    var position = { lat: -7.930769, lng: 112.637784 };
    var center = { lat: -7.933136, lng: 112.637020 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: center,
        scrollwheel: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,

    });
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: 'image/map-icon.png',
    });
    google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

};

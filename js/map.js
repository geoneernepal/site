var map = L.map('map').setView([28.0482554,82.4863172], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibG9zdGIxIiwiYSI6ImNqaTBjcGd4bjE2cGMza3M2MWEzcTRwd3gifQ.Ps6yKHol2bmEPndMSeYKKw'
}).addTo(map);

var companyIcon = L.icon({
    iconUrl: '../assests/img/pin.png',
    iconSize:     [38, 38], // size of the icon
    iconAnchor:   [19, 19], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -19] // point from which the popup should open relative to the iconAnchor
})

var marker = L.marker([28.048036437427186, 82.48631394798569], {icon: companyIcon}).addTo(map);

marker.bindPopup("<b>Hello!</b><br>Our Office is located here.").openPopup();
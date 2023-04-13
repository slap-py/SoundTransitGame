
function getPopulation(lat,lng,radius){
    request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            return request.responseText
        }
    }
    request.open("GET",`/getPopulation?lat=${lat}&lon=${lng}&radius=${radius}`);
    request.send();

}

var stopMarker = L.icon({
    iconUrl: '/static/3448339.png',
    iconSize: [64,64]
})
function onMapClick(e){
    popup = L.popup
    count = getPopulation(e.latlng.lat,e.latlng.lng,1000)
    popup
        .setLatLng(e.latlng)
        .setContent(`There are ${count} people living within 1km of that point.`)
        .openOn(map);
}
var map = L.map('map',{layers:[]}).setView([47.61, -122.34], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.on('click',onMapClick)

var stopMarker = L.marker([47.60920418132215, -122.33571870996371],{icon:stopMarker})
stopMarker.bindPopup("<strong>4th & Union</strong><br>1 (19:38)<br>8 (20:02)<br>214 (05:21)<br>🚴‍♂️📺")
stopMarker.addTo(map)



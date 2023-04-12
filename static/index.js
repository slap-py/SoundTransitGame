
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


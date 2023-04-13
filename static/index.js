
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

var map = L.map('map',{layers:[]}).setView([47.61, -122.34], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.on('click',onMapClick)
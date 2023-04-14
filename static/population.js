function getPopulation(lat,lng,radius){
    request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            return request.responseText
        }
    }
    request.open("GET",`/getPopulation?lat=${lat}&lon=${lng}&radius=${radius}`);
    request.send()
}
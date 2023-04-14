items = document.querySelectorAll('.depot-category')
document.getElementById('depots-search').addEventListener('keyup',function(e){
    items.forEach(function(item){
        text = item.textContent.toLowerCase().split('\n')[1]
        if (text.includes(e.target.value.toLowerCase())){
            item.style.display = 'flex';
        } else{
            item.style.display='none'
        }
    })
})

items1 = document.querySelectorAll('.stop-category')
document.getElementById('stops-search').addEventListener('keyup',function(e){
    items1.forEach(function(item){
        text = item.textContent.toLowerCase()
        if (text.includes(e.target.value.toLowerCase())){
            item.style.display = 'flex';
        } else{
            item.style.display='none'
        }
    })
})


map.on('zoomend',function(){
    if(map.getZoom() <11){
        map.removeLayer(depotGroup)
    } else{
        map.addLayer(depotGroup)
    }
})

map.on('zoomend',function(){
    if(map.getZoom() <13){
        map.removeLayer(stopGroup)
    } else{
        map.addLayer(stopGroup)
    }
})
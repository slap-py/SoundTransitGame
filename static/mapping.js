

var depotIcon = L.icon({
    iconUrl: '/serve?icon=depot',
    iconSize: [32,32]
})
var stopIcon = L.icon({
    iconUrl: '/serve?icon=stop',
    iconSize: [24,24]
})
var depotGroup = new L.FeatureGroup()
var stopGroup = new L.FeatureGroup()

function createDepot_visual(title,coordinates,level,buses){
    marker1 = L.marker (coordinates,{icon:depotIcon})
    marker1.bindPopup(`<strong>${title}</strong><br>Level ${level} (${buses})`)
    depotGroup.addLayer(marker1)
}

function createStop_visual(title,coordinates,routes,amenities){
    marker1 = L.marker (coordinates,{icon:stopIcon})
    amenitiesToIcons = {'br':'🚴','ld':'📺','ada':'♿','sh':'🏠','se':'💺'}
    icons = []
    for(i=0;i<amenities.length;i++){
        amenity = amenities[i]
        icons.push(amenitiesToIcons[amenity])

    }
    marker1.bindPopup(`<strong>${title}</strong><br>Routes: ${routes.join(', ')}<br>${icons.join('')}`)
    stopGroup.addLayer(marker1)
}


var map = L.map('map',{layers:[]}).setView([47.61, -122.34], 13);
osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
osm.addTo(map)


createDepot_visual('South Seattle Depot',[47.545529972620365, -122.32420953045026],3,'118/120')
createDepot_visual('Eastgate Depot',[47.576852494687834, -122.13284016835827],1,'7/20')
createDepot_visual('University District Depot',[47.66450428715962, -122.31910048389594],3,'29/45')
createDepot_visual('White Center Depot',[47.50670752868295, -122.35001505264952],1,'3/20')

createStop_visual('3rd & Seneca', [47.606931816681566, -122.3351124129687],['14','230'],['sh','ada'])
createStop_visual('1st & Stewart', [47.610444151300676, -122.34140160419284],['17','38'],['sh','ada'])
createStop_visual('1st & Union', [47.60770607349066, -122.33912025605323],['17','230'],['sh','ada'])

createStop_visual('Pine & Alaskan', [47.60872352035995, -122.3437810113533],['4','B'],['ada'])
createStop_visual('23rd & Yesler', [47.60178113259038, -122.30370247299345],['53','29','630'],['ada','br'])
createStop_visual('Weller & Rainier', [47.5976186696487, -122.31271099433737],['17'],['sh','ada'])

createStop_visual('Westlake & Mercer', [47.62448035843266, -122.33807076006781],['49'],['sh','ada'])
createStop_visual('Thomas & Terry', [47.62102033511989, -122.33706372894517],['17','41','48','52'],['sh','ada'])
createStop_visual('6th & King', [47.59830258846859, -122.3261657656141],['17','211'],['sh','ada'])

L.circle([47.59830258846859, -122.3261657656141],{radius:100}).addTo(map)
L.circle([47.5991734625748, -122.32640201444418], {radius: 100}).addTo(map);


map.addLayer(depotGroup)
map.addLayer(stopGroup)
bases = {'Street':osm}
overlays = {'Depots':depotGroup,'Stops':stopGroup}
layerControl = L.control.layers(bases,overlays)
layerControl.addTo(map)
map.on('click',onMapClick)
//🅿
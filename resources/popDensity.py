import shapely
import numpy as np
import geog
import requests
import json


def clean(coordsObject):
    o = []
    for coord in coordsObject[0]:
        z = list(coord)
        o.append([z[0],z[1]])
    return o

def togpstring(coords):
    return {'polygon':coords,
            'variables': [
    'gpw-v4-population-count-rev10_2020'
    ],
    'statistics': [
    'SUM'
    ],
    'requestID': "123456789" }

def getPopulation(lat,lon,radius):
    polygon = geog.propagate([lon,lat], np.linspace(0, 360, 10), radius)

    geoson=shapely.geometry.mapping(shapely.geometry.Polygon(polygon))

    coords=(geoson['coordinates'])

    args=str(togpstring(clean(coords)))

    #this is a public endpoint and rate limits are unknown
    fullurl='https://sedac.ciesin.columbia.edu/arcgis/rest/services/sedac/pesv3Broker/GPServer/pesv3Broker/execute?Input_Data='+args+'&f=json'

    response=requests.get(fullurl)
    returnstr = json.loads(response.text)
    sum = int(returnstr['results'][0]['value']['estimates']['gpw-v4-population-count-rev10_2020']['SUM'])
    popdense = sum/1000
    return {'population':sum,'population_density':popdense}

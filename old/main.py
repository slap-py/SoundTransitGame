import flask
from flask import request
from resources import popDensity
import json


app = flask.Flask('SoundTransit Game')


@app.route('/')
def serve_main():
    return flask.render_template('index.html')

@app.route('/getPopulation')
def serve_population():
    lat = float(request.args['lat'])
    lon = float(request.args['lon'])
    radius = float(request.args['radius'])
    densityObject = popDensity.getPopulation(lat,lon,radius)
    return json.dumps(densityObject)

app.run()
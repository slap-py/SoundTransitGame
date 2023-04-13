from resources import popDensity
import flask
from flask import request


app = flask.Flask('SoundTransit alpha')
@app.route('/')
def mainPage():
    return flask.render_template('index.html')


app.run()
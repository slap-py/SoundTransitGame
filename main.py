from resources import popDensity
import flask
from flask import request


app = flask.Flask('SoundTransit alpha')
@app.route('/')
def mainPage():
    return flask.render_template('index.html')

@app.route('/serve')
def serve():
    file = request.args['icon']
    if file == 'depot':
        return flask.send_file (r'E:\STGame\static\1018622.png')
    elif file == 'stop':
        return flask.send_file(r'E:\STGame\static\3448339.png')
app.run()
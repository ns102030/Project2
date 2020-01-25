from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'project2_db'
COLLECTION_NAME = 'worldmap_data'
FIELDS = {  'country': True, 
            'score': True}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/project2/worldmap_data")
def project2_worldmap_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    input_variables = collection.find(projection=FIELDS)
    json_variables = []
    for v in input_variables:
        json_variables.append(v)
    json_variables = json.dumps(json_variables, default=json_util.default)
    connection.close()
    # return json_projects
    return json_variables
if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)


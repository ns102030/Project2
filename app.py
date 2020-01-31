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

COLLECTION_NAME_1 = 'worldmap_data'
COLLECTION_NAME_2019 = '2019_data'
COLLECTION_NAME_2018 = '2018_data'
COLLECTION_NAME_2017 = '2017_data'
COLLECTION_NAME_2016 = '2016_data'
COLLECTION_NAME_2015 = '2015_data'
COLLECTION_NAME_YEARS = 'years'
COLLECTION_NAME_COUNTRY = 'countries'
COLLECTION_NAME_CORRELATION = "correlation"


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/top_ten")
def top_ten():
    return render_template("top_ten.html")

#  Reading data from mongodb for worldmap   
@app.route("/worldmap_data")
def project2_worldmap_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME_1]
    input_variables = collection.find()
    json_variables = []
    for v in input_variables:
        json_variables.append(v)
    json_variables = json.dumps(json_variables, default=json_util.default)
    connection.close()
    return json_variables

# Reading 2019 data from mongodb 
@app.route("/2019_data")
def project2_2019_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME_2019]
    input_variables_2 = collection.find()
    json_variables_2 = []
    for v in input_variables_2:
        json_variables_2.append(v)
    json_variables_2 = json.dumps(json_variables_2, default=json_util.default)
    connection.close()
    return json_variables_2

# Reading 2018 data from mongodb 
@app.route("/2018_data")
def project2_2018_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME_2018]
    input_variables_3 = collection.find()
    json_variables_3 = []
    for v in input_variables_3:
        json_variables_3.append(v)
    json_variables_3 = json.dumps(json_variables_3, default=json_util.default)
    connection.close()
    return json_variables_3

# Reading 2017 data from mongodb 
@app.route("/2017_data")
def project2_2017_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME_2017]
    input_variables_4 = collection.find()
    json_variables_4 = []
    for v in input_variables_4:
        json_variables_4.append(v)
    json_variables_4 = json.dumps(json_variables_4, default=json_util.default)
    connection.close()
    return json_variables_4

# Reading 2016 data from mongodb 
@app.route("/2016_data")
def project2_2016_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME_2016]
    input_variables_5 = collection.find()
    json_variables_5 = []
    for v in input_variables_5:
        json_variables_5.append(v)
    json_variables_5 = json.dumps(json_variables_5, default=json_util.default)
    connection.close()
    return json_variables_5

# Reading 2015 data from mongodb 
@app.route("/2015_data")
def project2_2015_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME_2015]
    input_variables_6 = collection.find()
    json_variables_6 = []
    for v in input_variables_6:
        json_variables_6.append(v)
    json_variables_6 = json.dumps(json_variables_6, default=json_util.default)
    connection.close()
    return json_variables_6

# Reading yearsfrom mongodb 
@app.route("/years")
def project2_years_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME_YEARS]
    input_variables_7 = collection.find()
    json_variables_7 = []
    for v in input_variables_7:
        json_variables_7.append(v)
    json_variables_7 = json.dumps(json_variables_7, default=json_util.default)
    connection.close()
    return json_variables_7

# Reading 2015 data from mongodb 
@app.route("/countries")
def project2_countries_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME_COUNTRY]
    input_variables_8 = collection.find()
    json_variables_8 = []
    for v in input_variables_8:
        json_variables_8.append(v)
    json_variables_8 = json.dumps(json_variables_8, default=json_util.default)
    connection.close()
    return json_variables_8

@app.route("/correlation")
def project2_correlation_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME_CORRELATION]
    input_variables_9 = collection.find()
    json_variables_9 = []
    for v in input_variables_9:
        json_variables_9.append(v)
    json_variables_9 = json.dumps(json_variables_9, default=json_util.default)
    connection.close()
    return json_variables_9


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)


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

FIELDS_1 = { 	
            'country'   :True,
            'score'	    :True
}

COLLECTION_NAME_2019 = '2019_data'
FIELDS_2019 = {  
            'rank'                          :True,	
            'country'                       :True,
            'score'	                        :True,
            'gdp_per_capita'                :True,
            'social_support'                :True,
            'health_life_expectancy'        :True,
            'freedom_to_make_life_choices'  :True,
            'generosity'                    :True,
            'perceptions_of_corruption'     :True
            }

COLLECTION_NAME_2018 = '2018_data'
FIELDS_2018 = { 'rank'                          :True,
                'country'                       :True,	
                'score'	                        :True,
                'gdp_per_capita'	            :True,
                'social_support'	            :True,
                'health_life_expectancy'	    :True,
                'freedom_to_make_life_choices'	:True,
                'generosity'	                :True,
                'perceptions_of_corruption'     :True
                }

COLLECTION_NAME_2017 = '2017_data'
FIELDS_2017 = { 
                'rank'	                        :True,
                'country'	                    :True,
                'score'                         :True,
                'whisker_high'	                :True,
                'whisker_low'	                :True,
                'gdp_per_capita'                :True,	
                'family'	                    :True,
                'health_life_expectancy'	    :True,
                'freedom_to_make_life_choices'  :True,	
                'generosity'	                :True,
                'trust_government_corruption'	:True,
                'dystopia_residual'             :True
                }

COLLECTION_NAME_2016 = '2016_data'
FIELDS_2016 = { 
                'rank'	                        :True,
                'country'	                    :True,
                'region'                        :True,
                'score'                         :True,
                'lower_confidence_interval'     :True,	
                'upper_confidence_interval'	    :True,
                'gdp_per_capita'                :True,
                'family'	                    :True,
                'health_life_expectancy'	    :True,
                'freedom'	                    :True,
                'trust_government_corruption'   :True,	
                'generosity'	                :True,
                'dystopia_residual'             :True
                }

COLLECTION_NAME_2015 = '2015_data'
FIELDS_2015 = { 
                'rank'                          :True,
                'country'                       :True,	
                'region'                        :True,	
                'score'                         :True,	
                'standard_error'                :True,	
                'gdp_per_capita'                :True,	
                'family'                        :True,	
                'health_life_expectancy'        :True,	
                'freedom'                       :True,	
                'trust_government_corruption'   :True,	
                'generosity'                    :True,
                'dystopia_residual'             :True
                }

@app.route("/")
def index():
    return render_template("index.html")

#  Reading data from mongodb for worldmap   

@app.route("/worldmap_data")
def project2_worldmap_data():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME_1]
    input_variables = collection.find(projection=FIELDS_1)
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
    input_variables_2 = collection.find(projection=FIELDS_2019)
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
    input_variables_3 = collection.find(projection=FIELDS_2018)
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
    input_variables_4 = collection.find(projection=FIELDS_2017)
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
    input_variables_5 = collection.find(projection=FIELDS_2016)
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
    input_variables_6 = collection.find(projection=FIELDS_2015)
    json_variables_6 = []
    for v in input_variables_6:
        json_variables_6.append(v)
    json_variables_6 = json.dumps(json_variables_6, default=json_util.default)
    connection.close()
    return json_variables_6

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)


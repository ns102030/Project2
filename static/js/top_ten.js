var datasets = ["2019_data", "2018_data", "2017_data", "2016_data", "2015_data"]



function getData(datasetString) {
    d3.json(`http://localhost:5000/${datasetString}`).then(function(data) {
        console.log(data);
    });
};

var data_2019 = getData(datasets[0]);
var data_2018 = getData(datasets[1]);
var data_2017 = getData(datasets[2]);
var data_2016 = getData(datasets[3]);
var data_2015 = getData(datasets[4]);
console.log(data_2019);


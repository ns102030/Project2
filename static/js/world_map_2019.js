
<<<<<<< HEAD
//Read the data ( Country and Score from the csv)
Plotly.d3.csv('data/data_worldmap.csv', 
function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }
      var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'country'),
        z: unpack(rows, 'score'),
        text: unpack(rows, 'country'),
        coloraxis: 'coloraxis',
        //autocolorscale: true
    }];

    // Define the layout
=======
d3.json("http://localhost:5000/project2/worldmap_data").then(function(data){
    // console.log(data);
    country_data=[];
    score_data=[];
    for (i=0;i<data.length;i++){
            country_data.push(data[i].country);
            score_data.push(data[i].score);       
    }
    // console.log(country_data);
    // console.log(score_data);

var data = [{
            type: 'choropleth',
            locationmode: 'country names',
            locations: country_data,
            z: score_data,
            text: country_data,
            coloraxis: 'coloraxis',
            //autocolorscale: true
        }];

        // Define the layout
>>>>>>> 64a5c9a9339399043e2443727f2c847150d5f2a8
    var layout = {
      title: 'Happiness Level',
      coloraxis: {colorscale: "Viridis"},
      geo: {
          projection: {
              type: 'robinson'
          }   
      }
    };

    //Plot the world map
    Plotly.newPlot("myDiv", data, layout, {showLink: false});
<<<<<<< HEAD
    });
=======
});
>>>>>>> 64a5c9a9339399043e2443727f2c847150d5f2a8

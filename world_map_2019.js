
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
    });
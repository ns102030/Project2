
d3.json("http://localhost:5000/worldmap_data").then(function(data){
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
d3.json("http://localhost:5000/project2/worldmap_data").then(function(data){

    var score = [];
    var gdp = [];
    var social = [];
    var health = [];
    var freedom = [];
    var generosity = [];
    var corruption = [];

    for (i=0;i<data.length;i++){
        score.push(data[i].score);
        gdp.push(data[i].gdp);  
        social.push(data[i].social);
        health.push(data[i].health);
        freedom.push(data[i].freedom);
        generosity.push(data[i].generosity);
        corruption.push(data[i].corruption);    
}
        var gdp_trace = {
            x: score,
            y: gdp,
            mode: 'markers',
            type: 'scatter',
          };
          Plotly.newPlot("scatter", gdp_trace);

        var social_trace = {
            x: score,
            y: social,
            mode: 'markers',
            type: 'scatter',
        }

        var health_trace = {
            x: score,
            y: health,
            mode: 'markers',
            type: 'scatter',
        }

        var freedom_trace = {
            x: score,
            y: freedom,
            mode: 'markers',
            type: 'scatter',
        }

        var generosity_trace = {
            x: score,
            y: generosity,
            mode: 'markers',
            type: 'scatter',
        }

        var corruption_trace = {
            x: score,
            y: corruption,
            mode: 'markers',
            type: 'scatter',
        }

        Plotly.newPlot("scatter", gdp_trace);
        Plotly.newPlot("scatter", social_trace);
        Plotly.newPlot("scatter", health_trace);
        Plotly.newPlot("scatter", freedom_trace);
        Plotly.newPlot("scatter", generosity_trace);
        Plotly.newPlot("scatter", corruption_trace);
    
    });
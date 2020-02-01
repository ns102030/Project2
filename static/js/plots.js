function plots(data,year_val){
    // console.log("I am in function2 for plots");

    score=[];
    gdp_temp=[];
    country=[];
    life_expct=[];
    freedom=[];
    generosity=[];
    corruption=[];
    country = [];
    
    for (i=0;i<data.length;i++){
        score.push(data[i].score);
        country.push(data[i].country);
        gdp_temp.push(data[i].gdp);
        life_expct.push(data[i].health_life_expectancy);
        freedom.push(data[i].freedom);
        generosity.push(data[i].generosity);
        corruption.push(data[i].perceptions_of_corruption);
        country.push(data[i].country)
    }
    // console.log("Year in define function:",year_val);
    // Converting GDP data into float number

    console.log(gdp_temp);

    // var gdp_temp = unpack(rows,'gdp_per_capita');
    var gdp = [];

    for(var i in gdp_temp)
        gdp.push(parseFloat(gdp_temp [i]));
    //   console.log(gdp);

    // Multiplying GDP array by 30 to make size larger
    var gdp_size = gdp.map(function(element) {
        return element*10;
    });

    //GDP vs Score
    var trace1 = [{
        // type: 'scatter',
        x: score,
        y: gdp,
        text: country,
        // type:scatter,
        mode: 'markers',
        opacity: 0.8,
        marker: {
            color: '#CC2A49',
            size: gdp_size,
            line: {
                color: 'rgb(20, 10, 46)',
                width: 1
              }
        }
      }];

      var layout = {
        title: 'GDP and Happiness',
        autosize: false,
      width: 495,
      height: 450,
      yaxis: {
          title: 'GDP per Capita'
      }
    }

    Plotly.newPlot("plot1", trace1, layout);

    // Health Life Expectancy vs Score
    var trace3 = [{
    // type: 'scatter',
    x: score,
    y: life_expct,
    text: country,
    mode: 'markers',
    opacity: 0.8,
    marker: {
        color: '#582840',
        size: gdp_size,
        line: {
            color: 'rgb(20, 10, 46)',
            width: 1
          }
    }
  }];

  var layout3 = {
    title: 'Health Life Expectancy and Happiness',
    autosize: false,
    width: 495,
    height: 450,
    yaxis: {
        title: 'Health'
    }
    }
  Plotly.newPlot("plot3", trace3, layout3);

    // Freedom to Make Life Choices vs Score
    var trace4 = [{
        // type: 'scatter',
        x: score,
        y: freedom,
        text: country,
        mode: 'markers',
        opacity: 0.8,
        marker: {
            color: '#EF4648',
            size: gdp_size,
            line: {
                color: 'rgb(20, 10, 46)',
                width: 1
              }
        }
      }];

      var layout4 = {
        title: 'Freedom to Make Life Choices and Happiness',
        autosize: false,
        width: 495,
        height: 450,
        yaxis: {
            title: 'Freedom'
        }
    }
      Plotly.newPlot("plot4", trace4, layout4);
   

    // Generosity vs Score
    var trace5 = [{
        // type: 'scatter',
        x: score,
        y: generosity,
        text: country,
        mode: 'markers',
        opacity: 0.8,
        marker: {
            color: '#F36F38',
            size: gdp_size,
            line: {
                color: 'rgb(20, 10, 46)',
                width: 1
              }
        }
      }];

      var layout5 = {
        title: 'Generosity and Happiness',
        autosize: false,
        width: 495,
        height: 450,
        yaxis: {
            title: 'Generosity'
        }
    }
      Plotly.newPlot("plot5", trace5, layout5);

      // Perceptions of Corruption vs Score
      var trace6 = [{
        // type: 'scatter',
        x: score,
        y: corruption,
        text: country,
        mode: 'markers',
        opacity: 0.8,
        marker: {
            color: '#F99E4C',
            size: gdp_size,
            line: {
                color: 'rgb(20, 10, 46)',
                width: 1
              }
        }
      }];

      var layout6 = {
        title: 'Perceptions of Corruption and Happiness',
        autosize: false,
        width: 495,
        height: 450,
        yaxis: {
            title: 'Trust'
        }
    }

      Plotly.newPlot("plot6", trace6, layout6);
};

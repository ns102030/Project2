d3.json("http://localhost:5000/2019_data").then(function(data){
    // console.log(data);
    rank_data=[];
    country_data=[];
    score_data=[];
    gdp_data=[];
    social_support_data=[];
    life_exp_data=[];
    life_choices_data=[];
    generosity_data=[];
    corruption_data=[];
    for (i=0;i<data.length;i++){
            rank_data.push(data[i].rank);
            country_data.push(data[i].country);
            score_data.push(data[i].score); 
            gdp_data.push(data[i].gdp_per_capita);
            social_support_data.push(data[i].social_support);
            life_exp_data.push(data[i].health_life_expectancy);
            life_choices_data.push(data[i].freedom_to_make_life_choices);
            generosity_data.push(data[i].generosity);
            corruption_data.push(data[i].perceptions_of_corruption);    
    }        
    // console.log(rank_data);
    // console.log(country_data);
    // console.log(score_data);
    // console.log(gdp_data);
    // console.log(social_support_data);
    // console.log(life_exp_data);
    // console.log(life_choices_data);
    // console.log(generosity_data);
    // console.log(corruption_data);

     // GDP vs Score
      var trace1 = [{
        type: 'scatter',
        x: score_data,
        y: gdp_data,
        text: country_data,
        mode: 'markers',
        opacity: 0.8,
        marker: {
            color: 'rgb(149, 222, 183)',
            size: 10,
            line: {
                color: 'rgb(20, 10, 46)',
                width: 1
              }
        }
      }];

      var layout = {
          // title: 'GDP and Happiness',
          autosize: false,
        width: 700,
        height: 500,
        yaxis: {
            title: 'GDP per Capita'
        }
      }

      Plotly.newPlot("plot1", trace1, layout);

      // Social Support vs Score
      var trace2 = [{
        type: 'scatter',
        x: score_data,
        y: social_support_data,
        text: country_data,
        mode: 'markers',
        opacity: 0.8,
        marker: {
            color: 'rgb(149, 222, 220)',
            size: 10,
            line: {
                color: 'rgb(20, 10, 46)',
                width: 1
              }
        }
      }];

      var layout2 = {
        // title: 'Social Support and Happiness',
        autosize: false,
        width: 700,
        height: 500,
        yaxis: {
            title: 'Social Support'
        }
    }
      Plotly.newPlot("plot2", trace2, layout2);

      // Health Life Expectancy vs Score
      var trace3 = [{
        type: 'scatter',
        x: score_data,
        y: life_exp_data,
        text: country_data,
        mode: 'markers',
        opacity: 0.8,
        marker: {
            color: 'rgb(149, 188, 222)',
            size: 10,
            line: {
                color: 'rgb(20, 10, 46)',
                width: 1
              }
        }
      }];

      var layout3 = {
        // title: 'Health Life Expectancy and Happiness',
        autosize: false,
        width: 700,
        height: 500,
        yaxis: {
            title: 'Health'
        }
    }
      Plotly.newPlot("plot3", trace3, layout3);

      // Freedom to Make Life Choices vs Score
      var trace4 = [{
        type: 'scatter',
        x: score_data,
        y: life_choices_data,
        text: country_data,
        mode: 'markers',
        opacity: 0.8,
        marker: {
            color: 'rgb(149, 152, 222)',
            size: 10,
            line: {
                color: 'rgb(20, 10, 46)',
                width: 1
              }
        }
      }];

      var layout4 = {
        // title: 'Freedom to Make Life Choices and Happiness',
        autosize: false,
        width: 700,
        height: 500,
        yaxis: {
            title: 'Freedom'
        }
    }
      Plotly.newPlot("plot4", trace4, layout4);

      // Generosity vs Score
      var trace5 = [{
        type: 'scatter',
        x: score_data,
        y: generosity_data,
        text: country_data,
        mode: 'markers',
        opacity: 0.8,
        marker: {
            color: 'rgb(183, 149, 222)',
            size: 10,
            line: {
                color: 'rgb(20, 10, 46)',
                width: 1
              }
        }
      }];

      var layout5 = {
        // title: 'Generosity and Happiness',
        autosize: false,
        width: 700,
        height: 500,
        yaxis: {
            title: 'Generosity'
        }
    }
      Plotly.newPlot("plot5", trace5, layout5);

      // Perceptions of Corruption vs Score
      var trace6 = [{
        type: 'scatter',
        x: score_data,
        y: corruption_data,
        text: country_data,
        mode: 'markers',
        opacity: 0.8,
        marker: {
            color: 'rgb(219, 149, 222)',
            size: 10,
            line: {
                color: 'rgb(20, 10, 46)',
                width: 1
              }
        }
      }];

      var layout6 = {
        // title: 'Perceptions of Corruption and Happiness',
        autosize: false,
        width: 700,
        height: 500,
        yaxis: {
            title: 'Trust'
        }
    }

      Plotly.newPlot("plot6", trace6, layout6);
      
  });

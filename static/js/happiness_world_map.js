
function world_map(data,year_val){
    // console.log("I am in world_map function2");
    // console.log(year_val);
    country_data=[];
    score_data_2015=[];
    score_data_2016=[];
    score_data_2017=[];
    score_data_2018=[];
    score_data_2019=[];
    //Read the data into individual arrays for easy access to data
    for (i=0;i<data.length;i++){
            country_data.push(data[i].country);
            score_data_2015.push(data[i].score_2015);   
            score_data_2016.push(data[i].score_2016);
            score_data_2017.push(data[i].score_2017);
            score_data_2018.push(data[i].score_2018);
            score_data_2019.push(data[i].score_2019);    
    }
    // console.log(score_data_2019);
    // console.log(score_data_2019);
    // width: 600,height: 600,

    if(year_val ==2015){
        var data = [{type: 'choropleth',locationmode: 'country names',locations: country_data,
            z: score_data_2015,text: country_data,autocolorscale: false}];
        // Define the layout
        var layout = {title: '2015',geo: {
            projection: {
                type: 'robinson'
            }
        }};
        console.log("Layout",layout.title)
        //Plot the world map
        Plotly.newPlot("myDiv", data, layout, {showLink: false});
    }
    else if(year_val ==2016){
        var data = [{type: 'choropleth',locationmode: 'country names',locations: country_data,
            z: score_data_2016,text: country_data,autocolorscale: false}];
        // Define the layout
        var layout = {title: '2016',geo: {
            projection: {
                type: 'robinson'
            }
        }};
        //Plot the world map
        Plotly.newPlot("myDiv", data, layout, {showLink: false});
    }
    else if(year_val ==2017){
        var data = [{type: 'choropleth',locationmode: 'country names',locations: country_data,
            z: score_data_2017,text: country_data,autocolorscale: false}];
        // Define the layout
        var layout = {title: '2017',geo: {
            projection: {
                type: 'robinson'
            }
        }};
        //Plot the world map
        Plotly.newPlot("myDiv", data, layout, {showLink: false});
    }
    else if(year_val ==2018){
        var data = [{type: 'choropleth',locationmode: 'country names',locations: country_data,
            z: score_data_2018,text: country_data,autocolorscale: false}];
        // Define the layout
        var layout = {title: '2018',geo: {
            projection: {
                type: 'robinson'
            }
        }};
        //Plot the world map
        Plotly.newPlot("myDiv", data, layout, {showLink: false});
    }
    else if (year_val ==2019){
        var data = [{type: 'choropleth',locationmode: 'country names',locations: country_data,
            z: score_data_2019,text: country_data,autocolorscale: false}];
        // Define the layout
        var layout = {title: '2019',geo: {
            projection: {
                type: 'robinson'
            }
        }};
        //Plot the world map
        Plotly.newPlot("myDiv", data, layout, {showLink: false});
    }

}
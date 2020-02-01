
function world_map(data,year_val){
    console.log("I am in world_map function2");
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
        colorscale: [
            [0,'rgb(95, 43, 127)'],[0.25,'rgb(162, 46, 114)'],
            [0.5,'rgb(238, 85, 85)'], [0.75,'rgb(248, 153, 106)'],
            [1,'rgb(252, 229, 167)']],
            z: score_data_2015,text: country_data,autocolorscale: false}];
        // Define the layout
        var layout = {title: '2015', 
            paper_bgcolor: 'rgb(253, 249, 240',
            geo: {
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
        colorscale: [
            [0,'rgb(95, 43, 127)'],[0.25,'rgb(162, 46, 114)'],
            [0.5,'rgb(238, 85, 85)'], [0.75,'rgb(248, 153, 106)'],
            [1,'rgb(252, 229, 167)']],
            z: score_data_2016,text: country_data,autocolorscale: false}];
        // Define the layout
        var layout = {title: '2016', 
            paper_bgcolor: 'rgb(253, 249, 240',
            geo: {
            projection: {
                type: 'robinson'
            }
        }};
        //Plot the world map
        Plotly.newPlot("myDiv", data, layout, {showLink: false});
    }
    else if(year_val ==2017){
        var data = [{type: 'choropleth',locationmode: 'country names',locations: country_data,
        colorscale: [
            [0,'rgb(95, 43, 127)'],[0.25,'rgb(162, 46, 114)'],
            [0.5,'rgb(238, 85, 85)'], [0.75,'rgb(248, 153, 106)'],
            [1,'rgb(252, 229, 167)']],
            z: score_data_2017,text: country_data,autocolorscale: false}];
        // Define the layout
        var layout = {title: '2017', 
            paper_bgcolor: 'rgb(253, 249, 240',
            geo: {
            projection: {
                type: 'robinson'
            }
        }};
        //Plot the world map
        Plotly.newPlot("myDiv", data, layout, {showLink: false});
    }
    else if(year_val ==2018){
        var data = [{type: 'choropleth',locationmode: 'country names',locations: country_data,
        colorscale: [
            [0,'rgb(95, 43, 127)'],[0.25,'rgb(162, 46, 114)'],
            [0.5,'rgb(238, 85, 85)'], [0.75,'rgb(248, 153, 106)'],
            [1,'rgb(252, 229, 167)']],
            z: score_data_2018,text: country_data,autocolorscale: false}];
        // Define the layout
        var layout = {title: '2018',
            paper_bgcolor: 'rgb(253, 249, 240',
            geo: {
            projection: {
                type: 'robinson'
            }
        }};
        //Plot the world map
        Plotly.newPlot("myDiv", data, layout, {showLink: false});
    }
    else if (year_val ==2019){
        var data = [{type: 'choropleth',locationmode: 'country names',locations: country_data,
        colorscale: [
            [0,'rgb(95, 43, 127)'],[0.25,'rgb(162, 46, 114)'],
            [0.5,'rgb(238, 85, 85)'], [0.75,'rgb(248, 153, 106)'],
            [1,'rgb(252, 229, 167)']],
            z: score_data_2019,text: country_data,autocolorscale: false}];
        // Define the layout
        var layout = {title: '2019',
            paper_bgcolor: '#F8F3ED',
            geo: {
            projection: {
                type: 'robinson'
            }
        }};
        //Plot the world map
        Plotly.newPlot("myDiv", data, layout, {showLink: false});
    }

}
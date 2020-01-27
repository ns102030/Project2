d3.json('data/happiness_correlation.json').then(function(corr){
    // console.log(corr);
    var x_var = [];
    var y_var = [];
    var z_var = [];

    for(i=0; i<corr.data.length;i++){
        x_var.push(corr.data[i].x);
        y_var.push(corr.data[i].y);
        z_var.push(corr.data[i].z);
    }
    // console.log(x_var);
    // console.log(y_var);
    console.log(z_var);

    var correlation = [{
        // x: x_var,
        // y: y_var,
        // z: z_var,
        x: [
            "score",
            "gdp_per_capita",
            "social_support",
            "health_life_expectancy",
            "freedom_to_make_life_choices",
            "generosity",
            "perceptions_of_corruption"
        ],
        y: [
            "score",
            "gdp_per_capita",
            "social_support",
            "health_life_expectancy",
            "freedom_to_make_life_choices",
            "generosity",
            "perceptions_of_corruption"
        ],
        z: [[
            1,
            0.793882868,
            0.777057788,
            0.779883149,
            0.566741826,
            0.075823695,
            0.385613071                    
        ],
        [
            0.793882868,
            1,
            0.754905727,
            0.835462115,
            0.379079072,
            -0.079662313,
            0.298919846

        ],
        [
            0.777057788,
            0.754905727,
            1,
            0.719009459,
            0.447333164,
            -0.048126454,
            0.181899465
        ],
        [
            0.779883149,
            0.835462115,
            0.719009459,
            1,
            0.390394776,
            -0.02951086,
            0.295282812

        ],
        [
            0.566741826,
            0.379079072,
            0.447333164,
            0.390394776,
            1,
            0.269741814,
            0.438843306
        ],
        [
            0.075823695,
            -0.079662313,
            -0.048126454,
            -0.02951086,
            0.269741814,
            1,
            0.326537543
        ],
        [
            0.385613071,
            0.298919846,
            0.181899465,
            0.295282812,
            0.438843306,
            0.326537543,
            1
        ]],
        type: 'heatmap',
        colorscale: 'YIGnBu'
    }];

    Plotly.newPlot('corr', correlation);

});
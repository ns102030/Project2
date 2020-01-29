d3.json("data/happiness_correlation.json").then((importedData) => {
    console.log("Happiness Data",data);

    var imported = importedData;

    // Define the variables that will store the data from the json file
    var x_var = imported.data[0].x;
    var y_var = imported.data[0].y;
    var z_var = imported.data[0].z;

    // console.log(x_var);
    // console.log(y_var);
    // console.log(z_var);

    // Create heatmap
    var correlation = [{
        x: x_var,
        y: y_var,
        z: z_var,
        type: 'heatmap',
        colorscale: 'YIGnBu'
    }];

    var layout = [{

    }]

    Plotly.newPlot('corr', correlation);

});
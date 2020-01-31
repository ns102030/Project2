d3.json("data/happiness_correlation.json").then((importedData) => {

    var imported = importedData;

    // Define the variables that will store the data from the json file
    var x_var = imported.data[0].x;
    var y_var = imported.data[0].y;
    var z_var = imported.data[0].z;

    console.log(x_var);
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


// function correlation(data){

//     x_var = [];
//     y_var = [];
//     z_var = [];

//     for(i=0; i<data.length; i++){
//         x_var.push(data[0].data.x);
//         // y_var.push(data[i].data.y);
//         // z_var.push(data[i].data.z);
//     }

//     console.log(x_var);

// // d3.json("data/happiness_correlation.json").then((importedData) => {

//     // var imported = importedData;

//     // Define the variables that will store the data from the json file
//     // var x_var = imported.data[0].x;
//     // var y_var = imported.data[0].y;
//     // var z_var = imported.data[0].z;

//     // console.log(x_var);
//     // console.log(y_var);
//     // console.log(z_var);

//     // Create heatmap
//     var correlation = [{
//         x: x_var,
//         y: y_var,
//         z: z_var,
//         type: 'heatmap',
//         colorscale: 'YIGnBu'
//     }];

//     var layout = [{

//     }]

//     Plotly.newPlot('corr', correlation);

// }


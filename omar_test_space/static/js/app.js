
// Create initial plots and data to display on first visit
function init() {
    Promise.all([d3.csv("data/2015.csv"), d3.csv("data/2019.csv")])
    .then(function(data) {
        var topTen = data[1].slice(0, 10);
        var entriesWithRegions_2015 = data[0];
        var countries = [];
        var scores = [];
        var regions_2019 = [];
        var allRegions = [];
        var allYears = ["2019", "2018", "2017", "2016", "2015"]
        var regionSelections = d3.selectAll("#selRegion");
        var yearSelections = d3.selectAll("#selYear");

        for (entry in topTen) {
            for (regions in entriesWithRegions_2015) {
                if (!allRegions.includes(entriesWithRegions_2015[regions].region)) {
                    allRegions.push(entriesWithRegions_2015[regions].region)
                }
                if (topTen[entry].country == entriesWithRegions_2015[regions].country) {
                    topTen[entry].region = entriesWithRegions_2015[regions].region;
                }
            }
            countries.push(topTen[entry].country);
            scores.push(topTen[entry].score);
            regions_2019.push(topTen[entry].region);
        }
        console.log(allRegions);
        // Populate select boxes with list of all regions and dataset years 
        regionSelections.append("option")
        .text("All Regions");
        for(var i = 0; i < allRegions.length; i++) { 
            regionSelections.append("option")
            .text(allRegions[i]);
        };
        for (var i = 0; i < allYears.length; i++) {
            yearSelections.append("option")
            .text(allYears[i]);
        }
        var trace1 = {
            x: scores.reverse(),
            y: countries.reverse(),
            text: regions_2019.reverse(),
            marker: {},
            type: "bar",
            orientation: "h"
        }
        trace1.marker.color = trace1.text.map(function(region) {
            switch(region) {
                case "Western Europe":
                    return "rgba(114, 147, 203, 1)";

                case "North America":
                    return "rgba(225, 151, 76, 1)";

                case "Australia and New Zealand":
                    return "rgba(132, 186, 91, 1)";

                case "Middle East and Northern Africa":
                    return "rgba(211, 94, 96, 1)";

                case "Latin America and Caribbean":
                    return "rgba(128, 133, 133, 1)";

                case "Southeastern Asia":
                    return "rgba(144, 103, 167, 1)";

                case "Central and Eastern Europe":
                    return "rgba(171, 104, 87, 1)";

                case "Eastern Asia":
                    return "rgba(204, 194, 16, 1)";

                case "Sub-Saharan Africa":
                    return "#a05195";

                case "Southern Asia":
                    return "#ff7c43";


                default:
                    return "yellow"
            }
            
        })
        var layout = {
            xaxis: {title: "Happiness Score"}
        }

        Plotly.newPlot("bar", [trace1], layout);

    })
    
};
init();

// Promise.all([
//     d3.csv("data/2015.csv"),
//     d3.csv("data/2016.csv"),
//     d3.csv("data/2017.csv"),
//     d3.csv("data/2018.csv"),
//     d3.csv("data/2019.csv")
// ])
// .then(function(data) {
//     var data_2015 = data[0];
//     var data_2016 = data[1];
//     var data_2017 = data[2];
//     var data_2018 = data[3];
//     var data_2019 = data[4];

//     var countries_2016 = [];

//     var datasets = [data_2015, data_2016, data_2017, data_2018, data_2019];
//     for (i in datasets) {
//         if(i == 0) {
//             for (j in datasets[i]) {
                
//             }
//         }
//     }
//     console.log(data_2015);
//     console.log(data_2016);
//     console.log(data_2017);
//     console.log(data_2018);
//     console.log(data_2019);
// });
        // var results = data.samples;
        // var subject = results[0];   
        // var otuIds;
        // var values;
        // var labels;
        // var subjectIdSelections = d3.selectAll("#selDataset");
        
        // // Populate select box with list of all test subject id numbers 
        // for(var i = 0; i < data.samples.length; i++) { 
        //     subjectIdSelections.append("option")
        //     .text(data.samples[i].id);
        // };

        // if (subject.otu_ids.length > 10) {
        //     otuIds = subject.otu_ids.map(id => `OTU ${id.toString()}`).slice(0, 10);
        //     values = subject.sample_values.slice(0, 10);
        //     labels = subject.otu_labels.slice(0, 10);
        // } else {
        //     otuIds = subject.otu_ids.map(id => `OTU ${id.toString()}`);
        //     values = subject.sample_values;
        //     labels = subject.otu_labels;
        // };
        // var revOtuIds = otuIds.reverse();
        // var revValues = values.reverse();
        // var revLabels = labels.reverse();

        // var trace1 = {
        //     x: revValues,
        //     y: revOtuIds,
        //     text: revLabels,
        //     type: "bar",
        //     orientation: "h"
        // };

        // var layout = {
        //     xaxis: {autorange: true}
        // };

        // Plotly.newPlot("bar", [trace1], layout);

        // var allOtuIds = subject.otu_ids;
        // var allValues = subject.sample_values;
        // var allLabels = subject.otu_labels;

        // // Initial bubble chart trace
        // var trace2 = {
        //     x: allOtuIds,
        //     y: allValues,
        //     mode: "markers",
        //     marker: {
        //         size: allValues.map(x => x * scale),
        //         color:  allOtuIds 
        //     },
        //     text: allLabels
        // };

        // var layoutBubble = {
        //     xaxis: {
        //         title: "OTU ID",
        //         autorange: true
        //     },
        //     yaxis: {autorange: true}
        // };


    //     Plotly.newPlot("bubble", [trace2], layoutBubble);

    //     var metaInfo = data.metadata[0];
    //     var keys = Object.keys(metaInfo);
    //     var vals = Object.values(metaInfo);

    //     var metaBox = d3.selectAll("#sample-metadata");
    //     for (var i = 0; i < keys.length; i++) {
    //         metaBox.append("p")
    //         .text(`${keys[i]}: ${vals[i]}`);
    //     };
    // });



// Listens for event changes within "select" tag
// d3.selectAll("#selDataset").on("change", updateData);

// // Read selected input, change plot and demographic data
// function updateData() {
//     var selection = d3.selectAll("#selDataset").property("value");
    
//     d3.json("data/samples.json").then(function(data) {
//         var results = data.samples;
//         var subject;
        
//         for (var i = 0; i < results.length; i++) {
//             if (results[i].id == selection) {
//                 subject = results[i];
//                 break;
//             }
//         };
        
//         var otuIds;
//         var values;
//         var labels;
//         if (subject.otu_ids.length > 10) {
//             otuIds = subject.otu_ids.map(id => `OTU ${id.toString()}`).slice(0, 10);
//             values = subject.sample_values.slice(0, 10);
//             labels = subject.otu_labels.slice(0, 10);
//         }
//         else {
//             otuIds = subject.otu_ids.map(id => `OTU ${id.toString()}`);
//             values = subject.sample_values;
//             labels = subject.otu_labels;
//         };
//         var revOtuIds = otuIds.reverse();
//         var revValues = values.reverse();
//         var revLabels = labels.reverse();
        
//         var x = revValues
//         var y = revOtuIds
//         var text = revLabels

//         // Restyle plots with new data
//         Plotly.restyle("bar", "x", [x]);
//         Plotly.restyle("bar", "y", [y]);
//         Plotly.restyle("bar", "text", [text]);

//         var allOtuIds = subject.otu_ids;
//         var allValues = subject.sample_values;
//         var allLabels = subject.otu_labels;
        
//         Plotly.restyle("bubble", "x", [allOtuIds]);
//         Plotly.restyle("bubble", "y", [allValues]);
//         Plotly.restyle("bubble", "text", [allLabels]);
//         Plotly.restyle("bubble", "marker.size", [allValues.map(x => x * scale)]);
//         Plotly.restyle("bubble", "marker.color", [allOtuIds]);

//         // Update metadata
//         var metaArray = data.metadata;
//         var metaInfo;
//         for (var i = 0; i < metaArray.length; i++) {
//             if (metaArray[i].id == selection) {
//                 var metaInfo = metaArray[i];
//                 var keys = Object.keys(metaInfo);
//                 var vals = Object.values(metaInfo);
//                 d3.select("#sample-metadata").selectAll("p").remove();
//                 var metaBox = d3.selectAll("#sample-metadata");
                
//                 for (var j = 0; j < keys.length; j++) {
//                     metaBox.append("p").text(`${keys[j]}: ${vals[j]}`);
//                 };
//                 break;
//             };
//         };

//     });
// };



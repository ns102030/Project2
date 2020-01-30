
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
            xaxis: {
                title: "Happiness Score",
                range: [0, 7.6],
                autotick: false,
                tick0: 0,
                dtick: 0.5,
                ticklen: 8
            },
            yaxis: {
                automargin: true
            }
        }

        Plotly.newPlot("bar", [trace1], layout);

    })
    
};
// Listens for event changes within "select" tag
d3.selectAll("#plotSelection").on("click", updatePlot);

function updatePlot() {
    var selectYear = d3.selectAll("#selYear").property("value");
    var selectRegion = d3.selectAll("#selRegion").property("value");

    Promise.all([d3.csv("data/2015.csv"), d3.csv(`data/${selectYear}.csv`)])
    .then(function(data){
        var entriesWithRegions_2015 = data[0];
        if (selectRegion !== "All Regions") {
            for (object in data[1]) {
                if (!data[1][object].region) {
                    for(entries in data[0]) {
                        if (entriesWithRegions_2015[entries].country == data[1][object].country) {
                            data[1][object].region = entriesWithRegions_2015[entries].region;
                        }
                    }
                }
                var filtered = data[1].filter(function(value, index, arr) {
                    return value.region == selectRegion;
                }) 
            }
            if (filtered.length > 10) {
                filteredTopTen = filtered.slice(0, 10);
            } else {
                filteredTopTen = filtered;
            }
            var topTen = filteredTopTen;
        } else {
            var topTen = data[1].slice(0, 10);   
            }
            var countries = [];
            var scores = [];
            var regions_selYear = [];
            var allRegions = [];
    
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
                regions_selYear.push(topTen[entry].region);
            }

            var trace1 = {
                x: scores.reverse(),
                y: countries.reverse(),
                text: regions_selYear.reverse(),
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
            // Restyle plots with new data
        
            Plotly.restyle("bar", "x", [trace1.x]);
        
            Plotly.restyle("bar", "y", [trace1.y]);
        
            Plotly.restyle("bar", "text", [trace1.text]);

            Plotly.restyle("bar", "marker", [trace1.marker]);
        })
    };
init();


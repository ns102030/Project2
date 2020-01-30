//Define worldmap function
function build_world_map(year_val) {
    // console.log("I am in worldmap function_1")
	d3.json("http://localhost:5000/worldmap_data").then ( data =>{
	  world_map(data,year_val);
	})
};

//Define and choose data to build summary table
function build_summary_table(year_val,country_val){
    // console.log("I am in the define-function for table");
    if(year_val==2015){
        d3.json("http://localhost:5000/2015_data").then ( data =>{
            summary_table(data,country_val,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2016){
        d3.json("http://localhost:5000/2016_data").then ( data =>{
            summary_table(data,country_val,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2017){
        d3.json("http://localhost:5000/2017_data").then ( data =>{
            summary_table(data,country_val,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2018){
        d3.json("http://localhost:5000/2018_data").then ( data =>{
            summary_table(data,country_val,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2019){
        d3.json("http://localhost:5000/2019_data").then ( data =>{
            summary_table(data,country_val,year_val);
            // console.log("Year in define function:",year_val);
    })
    }

}

//Define and choose data to build Guage Chart
function build_guage_chart(year_val,country_val){
    console.log("I am in the define-function for guage");
    if(year_val==2015){
        d3.json("http://localhost:5000/2015_data").then ( data =>{
            guage(data,country_val,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2016){
        d3.json("http://localhost:5000/2016_data").then ( data =>{
            guage(data,country_val,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2017){
        d3.json("http://localhost:5000/2017_data").then ( data =>{
            guage(data,country_val,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2018){
        d3.json("http://localhost:5000/2018_data").then ( data =>{
            guage(data,country_val,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2019){
        d3.json("http://localhost:5000/2019_data").then ( data =>{
            guage(data,country_val,year_val);
            // console.log("Year in define function:",year_val);
    })
    }

}

//Define and choose data to build Plots - Irais
function build_plots(year_val){
    if(year_val==2015){
        d3.json("http://localhost:5000/2015_data").then ( data =>{
            plots(data,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2016){
        d3.json("http://localhost:5000/2016_data").then ( data =>{
            plots(data,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2017){
        d3.json("http://localhost:5000/2017_data").then ( data =>{
            plots(data,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2018){
        d3.json("http://localhost:5000/2018_data").then ( data =>{
            plots(data,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
    if(year_val==2019){
        d3.json("http://localhost:5000/2019_data").then ( data =>{
            plots(data,year_val);
            // console.log("Year in define function:",year_val);
    })
    }
}


function init() {
    var selectorTwo = d3.select("#selDatasetYear");
	d3.json("http://localhost:5000/years").then((year_data) => {
    year_data.forEach((rec) => {
        year_value=rec.years;
        // console.log(year_value);
		selectorTwo
        .append("option")
        .text(year_value)
        .property("value", year_value);
    });
    })
    
    var selectorThree = d3.select('#selDatasetCountry');
    d3.json("http://localhost:5000/countries").then((country_data) => {
    country_data.forEach((rec) => {
        country_value=rec.country_name;
        // console.log(country_value);
		selectorThree
        .append("option")
        .text(country_value)
        .property("value", country_value);

    });
    })
    build_world_map(2019);
    build_summary_table(2019,"United States");
    build_guage_chart(2019,"United States");
    build_plots(2019);
   
}

function optionChangedOne(selectedYear) {
    // Declaring a global variable to have access to year when country is chosen
    year_change_value=selectedYear;
    // console.log(selectedYear);
    d3.select('#myDiv').html("");
    build_world_map(selectedYear);
    // build_plots(selectedYear);
    
  }
  
  function optionChangedTwo(selectedCountry) {
    ctry_change_value=selectedCountry;

    // console.log(selectedCountry);
    // console.log("Year change value",year_change_value)
    console.log("summary table call");
    build_summary_table(year_change_value,selectedCountry);
    console.log("Guage Chart call");
    build_guage_chart(year_change_value,selectedCountry);
    build_plots(year_change_value,selectedCountry);
  }

init();
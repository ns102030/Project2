function guage(score,year_val,country_val)
{
<<<<<<< HEAD
        console.log("I am in function2 for Guage chart");
        anychart.onDocumentReady(function () 
        {
                console.log("Inside anychart function");
                // For the year 2015
                if(year_val==2015){
                        // console.log("if statement for 2015");
                        anychart.data.loadJsonFile("http://localhost:5000/2015_data",function(data){
                                console.log("data loaded for 2015");
                                var score=0;
                                for(i=0;i<data.length;i++)
                                {
                                        if(country_val==data[i].country){
                                                score=data[i].score;
                                        }
                                }
                        console.log("2015 loop score:",score);
                        guage_elements(score);
                        })
                }
                // For the year 2016
                if(year_val==2016){
                        console.log("if statement for 2016");
                        anychart.data.loadJsonFile("http://localhost:5000/2016_data",function(data){
                                // console.log("data loaded for 2016");
                                var score=0;
                                for(i=0;i<data.length;i++)
                                {
                                        if(country_val==data[i].country){
                                                score=data[i].score;
                                        }
                                }
                        console.log("2016 loop score:",score);
                        
                        guage_elements(score);
                        })
                }
                
                // For the year 2017
                if(year_val==2017){
                        console.log("if statement for 2017");
                        anychart.data.loadJsonFile("http://localhost:5000/2017_data",function(data){
                                console.log("data loaded for 2017");
                                var score=0;
                                for(i=0;i<data.length;i++)
                                {
                                        if(country_val==data[i].country){
                                                score=data[i].score;
                                        }
                                }
                        console.log("2017 loop score:",score);
                        
                        guage_elements(score);
                        })
                }

                // For the year 2018
                if(year_val==2018){
                        console.log("if statement for 2018");
                        anychart.data.loadJsonFile("http://localhost:5000/2018_data",function(data){
                                console.log("data loaded for 2018");
                                var score=0;
                                for(i=0;i<data.length;i++)
                                {
                                        if(country_val==data[i].country){
                                                score=data[i].score;
                                        }
                                }
                        console.log("2018 loop score:",score);
                      
                        guage_elements(score);
                        })
                }

                // For the year 2019
                if(year_val==2019){
                        console.log("if statement for 2019");
                        anychart.data.loadJsonFile("http://localhost:5000/2019_data",function(data){
                                console.log("data loaded for 2019");
                                var score=0;
                                for(i=0;i<data.length;i++)
                                {
                                        if(country_val==data[i].country){
                                                score=data[i].score;
                                        }
                                }
                        console.log("2019 loop score:",score);
                        
                        guage_elements(score);
                        })
                }
 
        })
        
}
     
function guage_elements(score){
        // console.log("I am in function2: guage_elements");
        var gauge = anychart.gauges.circular();
        gauge.fill('#fff')
                                        .stroke(null)
                                        .padding(0)
                                        .margin(100)
                                        .startAngle(270)
                                        .sweepAngle(180);
        gauge.axis()
                                        .labels()
                                        .padding(5)
                                        .fontSize(14)
                                        .position('outside')
                                        .format('{%Value}');
=======
        
    let degree = parseInt(score) * 20;
>>>>>>> b72fbef132ec9dddc3c23126b06c5189d2296f69

	let level = degree;

	// // Trigonometry to Calculate Meter Point
	let degrees = 180 - level,
	radius = .5;
	let radians = degrees * Math.PI / 180;
	let x = radius * Math.cos(radians);
    let y = radius * Math.sin(radians);
    v_score=score.toFixed(2);

	// Path: may have to change to create a better triangle
	let mainPath = 'M -.0 -0.025 L .0 0.025 L ',
	   	pathX = String(x),
	   	space = ' ',
	   	pathY = String(y),
	   	pathEnd = ' Z';
	
	let path = mainPath.concat(pathX,space,pathY,pathEnd);
	console.log(path);

	let trace = [{ type: 'scatter',
                        x: [0], 
                        y:[0],
	                marker: {size: 12, color:'brown'},
	                showlegend: false,
	                name: 'Happiness Score',
	                text: score,
	                hoverinfo: 'text+name'},
					{ values: [50/5, 50/5, 50/5, 50/5, 50/5, 50],
					  text:["8-10", "6-8", "4-6", "2-4", "0-2", ""],
	                  rotation: 90,
	                  textinfo: 'text',
	                  textposition:'inside',
	                  textfont:{
	                 size : 12,
	                 },
                         marker: {colors:['#053061','#92c5de','#f4a582','#d6604d','#67001f','white']},
	               
	                hoverinfo: 'text',
	                hole: .5,
	                type: 'pie',
	                showlegend: false
	}];

	let layout = {
	                shapes:[{
					type: 'path',
					path: path,
	                fillcolor: 'brown',
	                line: {
	                        color: 'brown'
	                }
	  }],

	title: `<b> Happiness Score - ${v_score}</b> <br>${country_val}<br>${year_val}`,
	height: 400,
	width: 450,
	xaxis: {zeroline:false, showticklabels:false,
	           showgrid: false, range: [-1, 1]},
	yaxis: {zeroline:false, showticklabels:false,
	           showgrid: false, range: [-1, 1]},
	plot_bgcolor: 'white',
	paper_bgcolor: 'white',
	};

	Plotly.newPlot('guage', trace, layout, {responsive: true});

<<<<<<< HEAD
        gauge.title()
                                        .enabled(true)
                                        .useHtml(true)
                                        .padding(0)
                                        .text('Happiness Score<br>' +
                                                `<span style="color: #212121; font-size: 12px">${score}</span>`) 
                                        .hAlign('center')   
                                        .margin([0, 0, 10, 0]);  
        gauge.container('guage');
        // console.log("Calling guage draw");
        // gauge.container(refresh);
        gauge.draw();
    
=======
        
                       
};
>>>>>>> b72fbef132ec9dddc3c23126b06c5189d2296f69



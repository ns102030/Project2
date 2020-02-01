function guage(score,year_val,country_val)
{
        
    let degree = parseInt(score) * 20;

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
                         marker: {colors:['#C73866','#FE676E','#ffdba2','#FFBD71','#FD8F52','white']},
	               
	                hoverinfo: 'text',
	                hole: .5,
	                type: 'pie',
					showlegend: false,
	}];

	let layout = {
	                shapes:[{
					type: 'path',
					path: path,
					plot_bgcolor:"#F8F3ED",
					paper_bgcolor: '#F8F3ED',
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

        
                       
};



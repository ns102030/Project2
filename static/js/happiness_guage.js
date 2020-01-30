function guage(year_val,country_val)
{
        console.log("I am in function2 for Guage chart");
        anychart.onDocumentReady(function () 
        {
                console.log("Inside anychart function");
                // For the year 2015
                if(year_val==2015){
                        console.log("if statement for 2015");
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
                                console.log("data loaded for 2016");
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
        console.log("I am in function2: guage_elements");
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

        gauge.axis().scale()
                                        .minimum(0)
                                        .maximum(10)
                                        .ticks({interval: 1})
                                        .minorTicks({interval: 2});

        gauge.axis()
                                        .fill('#545f69')
                                        .width(1)
                                        .ticks({type: 'line', fill: 'white', length: 2});
        
        gauge.data([score]);
        
        // gauge.needle()
        //                                 // .enabled(true)
        //                                .stroke('2 #545f69')
        //                                 .startRadius('5%')
        //                                 .endRadius('90%')
        //                                 .startWidth('0.1%')
        //                                 .endWidth('0.1%')
        //                                 .middleWidth('0.1%')
        //                                 gauge.cap()
        //                                 .radius('3%')
        //                                 .enabled(true)
        //                                 .fill('#545f69');

        gauge.range(0, {
                                        from: 0,
                                        to: 3,
                                        position: 'inside',
                                        fill: '#dd2c00 0.4',
                                        startSize: 50,
                                        endSize: 50,
                                        radius: 98
                                });

        gauge.range(1, {
                                        from: 3,
                                        to: 7,
                                        position: 'inside',
                                        fill: '#ffa000 0.4',
                                        startSize: 50,
                                        endSize: 50,
                                        radius: 98
                                });

        gauge.range(2, {
                                        from: 7,
                                        to: 10,
                                        position: 'inside',
                                        fill: '#009900 0.4',
                                        startSize: 50,
                                        endSize: 50,
                                        radius: 98
                                });

        gauge.label(1)
                                        .text('Poor')
                                        .fontColor('#212121')
                                        .fontSize(14)
                                        .offsetY('68%')
                                        .offsetX(25)
                                        .anchor('center');

        gauge.label(2)
                                        .text('Average')
                                        .fontColor('#212121')
                                        .fontSize(14)
                                        .offsetY('68%')
                                        .offsetX(90)
                                        .anchor('center');
                                        
        gauge.label(3)
                                        .text('Good')
                                        .fontColor('#212121')
                                        .fontSize(14)
                                        .offsetY('68%')
                                        .offsetX(155)
                                        .anchor('center');

        gauge.title()
                                        .enabled(true)
                                        .useHtml(true)
                                        .padding(0)
                                        .text('Happiness Score<br>' +
                                                `<span style="color: #212121; font-size: 12px">${score}</span>`) 
                                        .hAlign('center')   
                                        .margin([0, 0, 10, 0]);  
        gauge.container('guage');
        console.log("Calling guage draw");
        // gauge.container(refresh);
        gauge.draw();
    

}

       
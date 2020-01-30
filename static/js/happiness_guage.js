function guage(data,country_val,year_val)
{
        for (i=0;i<data.length;i++){
                if(country_val==data[i].country){
                    score=data[i].score;
                }
            }   
        console.log("Score for Gauge:",score);
        value1=score.toFixed(2);
        anychart.onDocumentLoad(function () {
                
                console.log("Inside Gauge chart func");
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

                                gauge.data([score]);

                                gauge.axis().scale()
                                        .minimum(0)
                                        .maximum(10)
                                        .ticks({interval: 1})
                                        .minorTicks({interval: 2});

                                gauge.axis()
                                        .fill('#545f69')
                                        .width(1)
                                        .ticks({type: 'line', fill: 'white', length: 2});
                                       
                                
                                //  // Set Chart Title
                                gauge.title()
                                        .enabled(true)
                                        .useHtml(true)
                                        .padding(0)
                                        .text('Happiness Score<br>' +
                                                `<span style="color: #212121; font-size: 12px">${value1}</span>`) 
                                        .hAlign('center')   
                                        .margin([0, 0, 10, 0]);  

                                gauge.needle()
                                        // .enabled(true)
                                       .stroke('2 #545f69')
                                        .startRadius('5%')
                                        .endRadius('90%')
                                        .startWidth('0.1%')
                                        .endWidth('0.1%')
                                        .middleWidth('0.1%');
 
                                gauge.cap()
                                        .radius('3%')
                                        .enabled(true)
                                        .fill('#545f69');

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
                                
                                gauge.container('guage');
                                // guage.refresh(viewId);
                                gauge.draw();
                                

                                                              
                        
});
}
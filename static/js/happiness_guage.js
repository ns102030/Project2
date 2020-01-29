function guage(data,country_val,year_val)
{
        for (i=0;i<data.length;i++){
                if(country_val==data[i].country){
                    score=data[i].score;
                }
            }   
        console.log("Score for Gauge:",score);
        anychart.onDocumentReady(function () {
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

                                gauge.data(score);
                                gauge.axis().scale()
                                        .minimum(0)
                                        .maximum(10)
                                        .ticks({interval: 10})
                                        .minorTicks({interval: 5});

                                        gauge.axis()
                                        .fill('#545f69')
                                        .width(1)
                                        .ticks({type: 'line', fill: 'white', length: 2});

                                gauge.title('Score' +
                                        '<span style="color:#009900; font-size: 14px;">( <strong>5</strong>)</span>');
                                gauge.title()
                                        .useHtml(true)
                                        .padding(0)
                                        .fontColor('#212121')
                                        .hAlign('center')
                                        .margin([0, 0, 10, 0]);

                                gauge.needle()
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
                                        to: 2,
                                        position: 'inside',
                                        fill: '#D90500',
                                        startSize: 50,
                                        endSize: 50,
                                        radius: 98
                                });

                                gauge.range(1, {
                                        from: 2,
                                        to: 4,
                                        position: 'inside',
                                        fill: '#D54500',
                                        startSize: 50,
                                        endSize: 50,
                                        radius: 98
                                });

                                gauge.range(2, {
                                        from: 4,
                                        to: 6,
                                        position: 'inside',
                                        fill: '#008ACE',
                                        startSize: 50,
                                        endSize: 50,
                                        radius: 98
                                });

                                gauge.range(3, {
                                        from: 6,
                                        to: 8,
                                        position: 'inside',
                                        fill: '#000FD5',
                                        startSize: 50,
                                        endSize: 50,
                                        radius: 98
                                });
                                gauge.range(4, {
                                        from: 8,
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
                                gauge.draw();
});
}
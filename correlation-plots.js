
Plotly.d3.csv('data/world-happiness/2019.csv', 
function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
          
          var xValues = ['Score','GDP per capita	Social support','Healthy life expectancy','Freedom to make life choices','Generosity','Perceptions of corruption']

          var yValues = []

          var zValues = []

          var data = [{
            x: xValues,
            y: yValues,
            z: zValues,
            type: 'heatmap',
            colorscale: colorscaleValue,
            showscale: false
          }];
          
}});






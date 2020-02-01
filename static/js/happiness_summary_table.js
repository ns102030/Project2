function summary_table(data,country_val,year_val)
{
    console.log("I am in function_2 for summary table");
    // console.log("year change value passed:",year_val);

    
        for (i=0;i<data.length;i++){
            if(country_val==data[i].country){
                rank=data[i].rank;
                country=data[i].country;
                region=data[i].region;
                score=data[i].score;
                gdp=data[i].gdp;
                life_expt=data[i].health_life_expectancy;
                freedom=data[i].freedom;
                corruption=data[i].perceptions_of_corruption;
                generosity=data[i].generosity;
            }
        }   
        score_guage=score;
        var data_array=[['Country','Rank','Score','Region','GDP','Health Life Expectancy','Freedom','Trust Government Corruption','Generosity'],
                        [country,rank,score,region,gdp,life_expt,freedom,corruption,generosity]];
    // console.log(generosity);
    var data = [{
        type: 'table',
        columnorder: [1,2],
        columnwidth: [50,50],
  
      header: {
          values: [["Factors"],["Value"]],
          align: ["center", "center"],
          height: 30,
          line: {
              width: 1, 
              color: '#2d142c'
              },
          fill: {
              color: '#510a32'
              },
          font: {
              family: "'Montserrat', 'sans-serif'", 
              size: 17, 
              color: "white"
              }
          },
        
      cells: {
          values: data_array,
          align: ["left", "center"],
          height: 25    ,
          width: 40,
          line: {
              color: "#2d142c",
              width: 1
              },
          fill: {
              color: ['white', 'white']
              },
          font: {
              family: "'Montserrat', 'sans-serif'", 
              size: 13,
              weight: 20,
              color: "#C72C41"
              }
          }
      }]
  
      var layout = {
          title: `<b> Summary Table - ${country_val}(${year_val})</b>`,
          width: 500,
          height: 500,
          margin: {
              l: 50,
              r: 50,
              b: 100,
              t: 100,
          },
          plot_bgcolor: 'black',
		  paper_bgcolor: 'white',
      }
  
  
      Plotly.newPlot('summary_table', data,layout,{responsive: true});	
}
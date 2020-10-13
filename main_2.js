const w = 600;
const h = 200;
const barPadding = 2;
const svg = d3.select("#chart-container")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

d3.csv("./assets/tenkanen.csv")
  .then((data) => {
    data.forEach((d) => {
      d.time = +d.time
      d.length = +d.length
      // console.log(d.protocol);
      

      svg.selectAll("rect")
        .data(data)
        .join("rect")
        .attr("opacity", 0)
        // .attr("x", (d, i) => { return i * (w / data.length) })
        .attr("x", (d, i) => { return i * (w / data.length) })
        .attr("y", (d) => { return h - d.length / 8 })
        .attr("width", w / data.length - barPadding)
        .attr("height", (d) => { return d.length / 8 } )
        .style("fill", (d) => { 
          if(d.protocol==="DNS") {
            return "#FF9800"
          }
          else if (d.protocol==="TCP") {
            return "#9E9E9E"
          }
          else if(d.protocol==="HTTP") {
            return "blue"
          }
         })
         .transition()
         .duration(200)
         .delay((d, i) => { return i * 100 })
         .attr("opacity", 1);
    })
    console.log(data.length);
    console.log(w);
    
});






const dataset = [];
for(let i = 0; i < 20; i++) {
  let newNumber = Math.round(Math.random() * 30);
  dataset.push(newNumber);
}

const w = 600;
const h = 200;
const barPadding = 2;
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

const rects = svg.selectAll("rect")
  .data(dataset)
  .join("rect");

rects
  .attr("x", (d, i) => {
    return i * (w / dataset.length);
  })
  .attr("y", (d) => { return h - (d * 4) })
  .attr("width", w / dataset.length - barPadding)
  .attr("height", (d) => { return d * 4 })
  .style("fill", (d) => { 
    return (d > 15 ? "#111101" : "#808060") 
  });

const texts = svg.selectAll("text")
  .data(dataset)
  .join("text");

texts
  .text((d) => { return d })
  .attr("x", (d, i) => { return i * (w / dataset.length) + 2.8; })
  .attr("y", (d) => { return h - (d * 4) + 15; })
  .style("font-size", 11)
  .style("font-family", 'sans-serif')
  .style("fill", "white");


  // console.log(w / dataset.length - barPadding);

  // d3.select("body").selectAll("div")
  //   .data(dataset)  // <-- The answer is here!
  //   .enter()
  //   .append("div")
  //   .attr("class", "bar")
  //   .style("height", function(d) {
  //       var barHeight = d * 5;
  //       return barHeight + "px";
  //   });

// d3.select("body")
//   .selectAll("p")
//   .data(dataset)
//   .join("p")
//   .text((d, i) => { return d; })
//   .style("color", (d) => { 
//     if(d < 15) {
//       return "red"
//     } else {
//       return "blue"
//       }
//   });
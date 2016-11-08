
  var data = [80,10];
  
  
  var width = 95,
      height = 80,
      outerRadius = height / 2 - 10,
      innerRadius = outerRadius - 7,
      cornerRadius = 8,
      padAngle = -0.2;
      r = innerRadius - 100;
  
  var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.value; });
  
  var arcs = pie(data);
  
  var arc = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius);
  
  var color = d3.scale.ordinal()
    .range(["#f1f3f8", "#5bbaaf"]);
  
  var svg = d3.select("#pb-linkedin-chart").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 +"," + height / 2 + ")");
  
  svg.append("g").selectAll("path")
      .data(arcs)
    .enter().append("path")
      .style("fill", function(d, i) { return color(i); })
      .style("fill-opacity", 1)
      //.style("stroke", "#ccc")
      //.style("stroke-width", "0.5px")
      .attr("d", arc);
  
  svg.append("text")
    .attr("dy", "5px")
    .style("text-anchor", "middle")
    .attr("class", "generalProgress")
    .text(function(d) { return '20%'; })
    .style("fill", "black")
    ;

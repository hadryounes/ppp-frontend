
  var data = [20, 64, 16];
  
  
  var width = 300,
      height = 250,
      outerRadius = height / 2 - 10,
      innerRadius = outerRadius - 12,
      cornerRadius = 10,
      padAngle = -0.1;
      r = innerRadius - 100;
  
  var pie = d3.layout.pie()
      .padAngle(padAngle);
  
  var arcs = pie(data);
  
  var arc = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius);
  
  var color = d3.scale.ordinal()
    .range(["#f1f3f8", "#5bbaaf", "#c4d36d"]);
  
  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  svg.append("g").selectAll("path")
      .data(arcs)
    .enter().append("path")
      .style("fill", function(d, i) { return color(i); })
      .style("fill-opacity", 1)
      //.style("stroke", "#ccc")
      //.style("stroke-width", "0.5px")
      .attr("d", arc);
  
  svg.append("text")
    .attr("dy", "-10px")
    .style("text-anchor", "middle")
    .attr("class", "generalProgress")
    .text(function(d) { return '80%'; })
    .style("fill", "#5bbaaf")
    ;
    
  svg.append("text")
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .attr("class", "weeklyProgress")
    .text(function(d) { return '+16%'; })
    .style("fill", "#c4d36d")
    ;
    
  svg.append("text")
    .attr("dy", "2.7em")
    .style("text-anchor", "middle")
    .attr("class", "weeklyLabel")
    .text(function(d) { return 'since last week'; })
    .style("fill", "black")
    ;

var WIDTH = 960,
    HEIGHT = 500;

var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-120)
    .linkDistance(90)
    .size([WIDTH, HEIGHT]);

var svg = d3.select("#container").append("svg")
    .attr("width", WIDTH)
    .attr("height", HEIGHT);

// Load external file from JSON
d3.json("js/miserables.json", function(error, graph) {

    console.debug(graph.nodes);

    force.nodes(graph.nodes)
        .links(graph.links)
        .start();

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke", "grey")
        .style("stroke-width", 2);

    // 2) DO IT Make color dependent on "Group"
    // 3) DO IT Make color dependent on inbound edges
    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 5)
        // 4) DO IT Show node title when mouseover
        .on("mouseover", function() { console.debug('hover'); })
        .style("fill", function(d) { return color(d.group);})
        .call(force.drag);

    node.append("title")
        .text(function(d) { return d.name; });

    force.on("tick", function() {

        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    });
});

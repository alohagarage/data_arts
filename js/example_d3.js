// Utility function to generate data
//
var randomArray = function(array) {

    var newItem = function() {
        return {
            'x': Math.floor(Math.random() * 500),
            'y': Math.floor(Math.random() * 300),
            'r': Math.floor(Math.random() * 10) + 1
        }
    };

    if (array) {
        array.push(newItem())
    }
    else {
        var array = [];
        for (var i = 0; i < 10; i ++) {
            array.push(newItem());
        }
    }

    return array;
}


// Basic parameters
var WIDTH = 500,
    HEIGHT = 300;

// Make an array of data
var dataArray = randomArray();

// Initialize everything
var svg = d3.select('#container')
    .append('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT);


var update = function(ds) {

    var circles = svg.selectAll('.circle')
        .data(ds);

    // What happens when data is entered?
    // 1) DO IT: Make new circles fly in from off-screen (left)
    circles.enter()
        .append('circle')
        .attr('color', 'black')
        .attr('class', 'circle')
        .attr('r', function(d) { return d.r; });
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; })

    // What happpens when data is removed?
    circles.exit()
        .transition()
        .attr('r', 10)
        .transition()
        .attr('r', 1)
        .remove();
}

update(dataArray);

// function run when 1st button is clicked
$('#button-1').on('click', function() {

    svg.selectAll('.circle')
        .remove()

    dataArray = randomArray();

    update(dataArray);

    // 2) DO IT Make a function that re-randomizes the x and the y

});


// function run when 1st button is clicked
$('#button-2').on('click', function() {

    dataArray = randomArray(dataArray);

    update(dataArray);

});

// function run when 1st button is clicked
$('#button-3').on('click', function() {

    dataArray.splice(0, 1);

    update(dataArray);

});

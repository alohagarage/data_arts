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

var modifyArray = function(array) {

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

    //UPDATE
    circles.transition()
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });

    // What happens when data is entered?
    // ENTER
    circles.enter()
        .append('circle')
        .attr('color', 'red')
        .attr('class', 'circle')
        .attr('r', function(d) { return d.r; })
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });

    // What happpens when data is removed?
    // EXIT
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

});


// function run when 1st button is clicked
$('#button-2').on('click', function() {

    for (var i = 0; i < dataArray.length; i ++) {
        dataArray[i]['x'] = 0;
    }


    update(dataArray);

});

// function run when 1st button is clicked
$('#button-3').on('click', function() {

    dataArray.splice(0, 1);

    update(dataArray);

});

//DO IT "Window" your random array, so that only 5 array items are shown at a time.
// When you reach teh end of the array, loop back
// Put function here that you'd like performed at intervals
setInterval(function() {

    var dataArray = randomArray();

    update(dataArray);

}, 1500);

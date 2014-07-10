/* DO IT */
// Define a "person" class 
//
// First, define a list of friends, each friend is a person
//
// Write a function that looks through the friends and returns the first name of the oldest member
//
// Write a function that looks through the friends and returns the age of the richest member
//
// Write a function that finds the most common hair color
//
//
// *BONUS* Write a function to randomly generate a GROUP OF FRIENDS!!
//

function RandomPerson() {

    var possHairColor = [
        'black',
        'brown',
        'red',
        'blonde',
        'purple'
    ];

    var possFirstName = [
        'Mary',
        'Jane',
        'Joe',
        'Jose',
        'Tomas',
        'Stevie'
    ];

    var possLastName = [
        'Ruiz',
        'Arroyo',
        'Stevenson',
        'Edwards'
    ];

    this.age = Math.round(Math.random() * 100);

    this.income = Math.round(Math.random() * 100000000000);

    this.hairColor = possHairColor[Math.floor(Math.random() * possHairColor.length)];

    this.firstName = possFirstName[Math.floor(Math.random() * possFirstName.length)];

    this.lastName = possLastName[Math.floor(Math.random() * possLastName.length)];

    this.introduce = function() {
        return "Hello my name is " + this.firstName + " " + this.lastName + " I'm " + this.age;
    };

};

var makeFriends = function(num) {
    var output = [];

    for (var i = 0; i < num; i ++) {
        var p = new RandomPerson();
        output.push(p);
    }

    return output;
};

var friends = makeFriends(10);

for (var i = 0; i < friends.length; i ++) {
    console.log(friends[i].introduce());
}

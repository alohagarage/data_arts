
// Set some variables

// strings
var stringCheeseExpletive = 'This is a string';

console.log(stringCheeseExpletive);

// numbers
var numbaz = 1;

console.log(numbaz);

// arrays
var arraygun = ['this', 'that', 'other'];

console.log(arraygun[2]);

// objects
var elTejon = {
    "firstName": "Elizabeth",
    "lastName": "Lemon",
    "userName": "cheezyblaster187",
    "password": "meatCat"
};

console.log(elTejon['firstName'])


// conditionals
if (1 == 0 ) {
    // Do something
    console.log('action1');
} else {
    // Do something else
    console.log('action2');
};

// iterate
for (var i = 0; i < arraygun.length; i ++) {
    console.log(arraygun[i]);
}

// Make a function
//var conjunctionJunction = function(x, y) {
var conjunctionJunction = function(x, y) {
    var output = x + y;
    return output;
};

console.log(conjunctionJunction(6, 7));
console.log(conjunctionJunction(6, 4));



// Objects can be used to make "Classes", which can have functions
function Person() {

    this.age = 0;

    this.setFirstName = function(fn){
        this._firstName = fn;
    };

    this.setLastName = function(ln) {
        this._lastName = ln;
    };

    this.sayName = function() {
        return "Hello my name is " + this._firstName + " " + this._lastName + " and I'm " + this.age + " years old";
    };

    this.birthdayParty = function() {
        this.age ++;
    };
};

// Let's, uh, make a baby
var peter = new Person();

//Who are you?
peter.setFirstName('Peter');
peter.setLastName('Venkman');

//Baby's birthday's are boring
peter.birthdayParty();

//Pizza party!
peter.birthdayParty();

//Jump castle!
peter.birthdayParty();

console.log(peter);


/*
*/







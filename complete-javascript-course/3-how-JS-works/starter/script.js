///////////////////////////////////////
// Lecture: Hoisting

/*
calculateAge(1965);


function calculateAge(year) {
    console.log(2016 - year);
}
*/




// retirement(1965);
/*
let retirement = function(year) {
    console.log(65 - (2016 - year));
} */ //function expression, not function declaration

//hoisting only works for function declarations and not function expressions

//variables
/*console.log(age); //undefined
var age = 23;
console.log(age); //23

function foo(){
    console.log(age); //undefined
    var age = 65;
    console.log(age); //65
}

foo(); //65
console.log(age); //23 */
//Why does line 32 prints age 65 and line 33 prints age 23?
//Due to execution stack -- the function foo(Function Execution Stack) gets added on top of Global Execution Stack and there for gets executed first














///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
} */
//Hello!, Hi!, Hey!


// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
    // console.log(a + b + c + d); //Uncaught ReferenceError: b is not defined
}
// Hello! undefined undefined John

///////////////////////////////////////
// Lecture: The this keyword

//this will always refer to the object

// console.log(this);

// calculateAge(1985);

// function calculateAge(year){
//     console.log(2016 - year);
//     console.log(this); //function is attached to the global object therefore this is the global object which is the window
// }

var john = {
    name: 'John',
    yearOfBirth: '1990',
    calculateAge: function() {
        console.log(this); //'this' will refer to the john object because
        // the function is a method call and 'this' will refer to the object that called the method
        console.log(2016 - this.yearOfBirth); //26

        /*
        function innerFunction() {
            console.log(this);
        }

        innerFunction(); // 'this' will refer to the window because its a regular function call and the default object is the window object
        */
    }
}

john.calculateAge(); //john object

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge(); //mike object
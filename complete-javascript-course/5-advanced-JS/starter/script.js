//Function Constructor
/*
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
let mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

//Primitives vs Objects

//Primitives
let a = 23;
let b = a;
a = 46;
console.log(a); //46
console.log(b); //23


//Objects
let obj1 = {
    name: 'John',
    age: 26
}

let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); //30
console.log(obj2.age); //30
/*
variable obj2 is a reference that points to obj1, it doesn't create a new copy
*/





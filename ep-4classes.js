// classes allow us to create blueprints and instantiate objects
// however, their implementation in javascript is different from other OOP languages
// classes are syntactic sugar of cuntion constructir and prototypical inheritance. It is not a new concept itself


// class declaration
class Person {
	constructor(name, birthYear, gender) {
		this.name = name;
		this.birthYear = birthYear;
		this.gender = gender;
	}

	// inherits, not constructs this function
	calcAge() {
		console.log(new Date().getFullYear() = this.birthYear);
	}
}

// inherit, not composition
Person.prototype.greet = function() {
	console.log(`Sup ${this.name}`);
}

let john = new Person("John", 1990, "Male");
console.log(john);
john.__proto__ === Person.prototype; // true
john.greet();

let merry = new Person("Merry", 1995, "Female");

let steve = new Person("Merry", 1985, "Male");

// class expression
let Person = class {}



// classes cannot be hoisted
// - cannot call before initiation
//
// classes are first class citizen
// - In JavaScript, a First Class Citizen is an entity that can be assigned to a variable, passed as an argument to a function, returned from a function, and has properties and methods assigned to it.
//
// classes are always in strict mode

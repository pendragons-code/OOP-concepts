// static methods are methods associated with the class and not the instances

// instance method vs static method


// instance method

/*
class Person {
	constructor(name, birthYear, gender) {
		this.name = name;
		this.birthYear = birthYear;
		this.gender = gender;
	}

	// this is an instance method as when you check the "Person" the method will be a part of it
	calcAge() {
		console.log(new Date().getFullYear() - this.birthYear);
	}

	// static method - it is stuck to the class, not instance
	static greet() {
		console.log("Hey there! How are you?");
	}
}

let john = new Person("john", 1990, "Male");
console.log(john);

Person.greet();

*/


// creating a static method for a function constructor


let Person = function(name, gender, birthYear) {
	this.name = name;
	this.gender = gender;
	this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
	let age = new Date().getFullYear() = this.birthYear;
	console.log(age);
}

// attached statically, not callable by the instance
Person.greet = function() {
	console.log("Have a nice day");
}

let mark = new Person("mark", "male", 1995);
console.log(mark);
mark.calcAge();

// gives an error
mark.greet();

// works
Person.greet();






// sample built in static methods:
Number.parseInt();
Number.isNaN();
Array.from();

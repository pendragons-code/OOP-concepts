let Person = function(name, gender, birthYear) {
	this.name = name;
	this.gender = gender;
	this.birthYear = birthYear;

	// this is bad because all of the "persons" will have a function in memory, this ends up occupying
	// space that could be used for something else
	// we can make it inherit this via attaching it to the prototype
	/*
	this.calcAge = function() {
		let age = new Date().getFullYear() - this.birthYear;
		console.log(age);
	}
	*/
}

Person.prototype.calcAge = function() {
	let age = new Date().getFullYear() - this.birthYear;
	console.log(age);
}

Person.prototype.city = "London";

let john = new Person("John", "Male", 1990);
john.calcAge();
// if you console.log(john), you will notice calcAge is attached to Proto (not john itself)
// Notable behaviours john.__proto__ === Person.prototype (true)
// john.__proto__.__proto__ === Object.prototype (true)
//
// If you tried to check the hasOwnProperty("city"), you will notice it returns false for john
// this is because he inherits it, but does not actually have it himself

let merry = new Person("Merry", "Female", 1995);
let steve = new Person("Steve", "Male", 1989);

// Person is also an instanceof Object



// every object we create in js is directly or indirectly an instance of object constructor
// he will have access to hasOwnProperty and more
let mark = {
	name: "mark",
	birthYear: 1992,
	gender: "Male"
}
console.log(mark.hasOwnProperty("name")); // true

// behind the scenes
// let mark = new Object();
// mark.name = "mark"
// ...


let arr = [10, 20, 30];
// behind the scenes: new Array()
console.log(arr.__proto__); // you will see that from this you have access to all the array methods

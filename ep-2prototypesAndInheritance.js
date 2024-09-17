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

let merry = new Person("Merry", "Female", 1995);
let steve = new Person("Steve", "Male", 1989);

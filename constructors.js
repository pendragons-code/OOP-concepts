// constructor function

let Person = function(name, gender, birthYear) {
	this.name = name;
	this.gender = gender;
	this.birthYear = birthYear;
	this.calcAge = function() {
		let age = new Date().getFullYear() - this.birthYear;
		console.log(age);
	}
}

let john = new Person("John", "Male", 1990);
// behind the scenes
// let john = {}
// this = john
// john.name = "John"
// john.gender = "Male"
// john.birthYear = 1990
// john.calcAge = f(){}
// return this


let merry = new Person("Merry", "Female", 1995);
let steve = new Person("Steve", "Male", 1989);

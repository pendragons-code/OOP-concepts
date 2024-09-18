// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.


// serves as a prototype to have stuff inherited
let person = {
	calcAge() {
		return new Date().getFullYear() - this.birthYear;
	},

	greet() {
		return "Have a nice day!";
	},

	init(name, birthYear, gender) {
		this.name = name;
		this.birthYear = birthYear;
		this.gender = gender;
	}
}

// prototypal inheritance via inheriting stuff from above
let john = Object.create(person);

// john is no longer empty
john.name = "john";
john.birthYear = 1990;
john.gender = "Male";

console.log(john.calcAge());


let merry = Object.create(person, {
	name: { value: "Merry" },
	birthYear: { value: 1995 },
	gender: { value: "Female" }
});
console.log(merry);



let mark = Object.create(person);
mark.init("Mark", 2002, "Male");
console.log(mark);

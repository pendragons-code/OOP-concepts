// Parent
let Person = function(name, gender, birthYear) {
	this.name = name;
	this.gender = gender;
	this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
	let age = new Date().getFullYear() - this.birthYear;
	console.log(age);
}

let john = new Person("John", "Male", 1990);
console.log(john);



// child
/*
// Employee - in this portion of code below, you can see that there
// are duplicate properties in the "Employee" object
let Employee = function(name, gender, birthYear, employeeId, salary) {
	this.name = name; // duplicates :(
	this.gender = gender; // duplicates :(
	this.birthYear = birthYear; // duplicates :(
	this.employeeId = employeeId;
	this.salary = salary;
}
*/

// Employee without dupes
// we can fix this by letting employee inherit the properties from "person"

let Employee = function(name, gender, birthYear, employeeId, salary) {
	Person.call(this, name, gender, birthYear); // .call(this ...) is needed as if you do not have this here it would be called to window instead of the instance.
	this.employeeId = employeeId;
	this.salary = salary;
}

// the setting of the prototype must come first before attaching more
Employee.prototype = Person.prototype; // inherits calcAge;


// if you set methods before attaching the prototypes, you basically get this:
// let a = 5
// let b = 3
// 
// a = a + b
// a = b
// a just becomes 3
Employee.prototype.calcSalary = function() {
	return this.salary * 12;
}

Employee.prototype.empolyeeDetails = function() {
	console.log(this.name);
	console.log(this.employeeId);
}

let mark = new Employee("Mark", "Male", 1995, 101, 12000);
console.log(mark);

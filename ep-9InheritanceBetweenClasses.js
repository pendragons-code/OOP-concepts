// reminder:
//
// Classes are nothing but syntatic sugar of function constructors and prototypal inheritance
// classes are an abstraction layer over function constructors
// when inheriting something from one class to another, it uses the same concept of function constructor inheritance


class person {
	constructor(name, birthYear, gender) {
		this.name = name;
		this.birthYear = birthYear;
		this.gender = gender;
	}

	calcAge() {
		console.log(new Date().getFullYear() - this.birthYear);
	}
}

class Employee extends Person {
	constructor(name, birthYear, gender, employeeId, salary) {
		super(name, birthYear, gender); // calls the constructor of the parent class (Person)
		this.employeeId = employeeId;
		this.salary = salary;
	}

	calcSalary() {
		return this.salary * 12;
	}

	empolyeeDetails() {
		console.log(this.name, this.employeeId);
	}
}

let mark = new Employee("Mark", 1995, "Male", 201, 18000);
console.log(mark);

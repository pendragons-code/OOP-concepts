let person = {
	calcAge() {
		return new Date.getFullYear() - this.birthYear;
	},

	personInit(name, birthYear, gender) {
		this.name = name;
		this.birthYear = birthYear;
		this.gender = gender;
	}
}

let employee = Object.create(person);
employee.employeeInit = function(name, birthYear, gender, employeeId, salary) {
	employee.personInit(name, birthYear, gender);
	this.employeeId = employeeId;
	this.salary = salary;
}

let mark = Object.create(employee);
mark.employeeInit.call(this, "Mark", 1990, "Male", 301, 24000);
console.log(mark);

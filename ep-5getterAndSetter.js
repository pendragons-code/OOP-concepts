// 2 key types of properties in javascript
// Data Properties
// Accessor Properties


let john = {
	name: "John",
	birthYear: 1990,
	AnnualSalary: 12000,

	get getName() {
		return this.name;
	},

	set setName(val) {
		this.name = val;
		if(val.length < 4) return console.log("Name should at least be 4 characters.");
		this.name = val;
	}
}

john.getName;
john.setName = "Johnson";
// john.getName returns "Johnson"
//
// you can also do this using = normally john.name = "Johnson"
//
// this is done as encapsulation, it hides the data from the outside world. data that should be accessible
// will use the get method


// You can also use them in classes

let User = class {
	constructor(name, password, role) {
		this.name = name,
		this.password = password,
		this.role = role
	}

	set setPassword(val) {
		if(val.length < 4) return console.log("passwd needs to be 4 chars long.");
		this.password = val;
	}
}


let mark = new User("Mark", "qweqwe", "admin")
mark.setPassword = "ABC132";

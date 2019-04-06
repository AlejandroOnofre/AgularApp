function greeter(person){
	return "Hello, "+ person
}

let user = "Alejandro Onofre"

document.body.innerHTML = greeter(user)

function greeter2(person: string){
	return "Hello 2, "+person;
}

let user2 = "Alejandro Onofre"

document.body.innerHTML = greeter2(user2);

/*function greeter3(person: string){
	return "Hello, "+person;
}

let user3 = [0,1,2];

document.body.innerHTML = greeter3(user3);*/

/*
interface Person{
	firstName: string;
	lastName: string;
}


function greeter4(person: Person){
	return "Hello interface, "+ person.firstName + " " + person.lastName;
}

let user4 = {firstName: "Alejandro", lastName: "Onofre"}

document.body.innerHTML = greeter4(user4);
*/

class Student {
	fullName: string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}


interface Person{
	firstName: string;
	lastName: string;
}


function greeter4(person: Person){
	return "Hello class, "+ person.firstName + " " + person.lastName;
}

let user4 = new Student("Alejandro", "Ing.", "Onofre")

document.body.innerHTML = greeter4(user4);


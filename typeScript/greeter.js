function greeter(person) {
    return "Hello, " + person;
}
var user = "Alejandro Onofre";
document.body.innerHTML = greeter(user);
function greeter2(person) {
    return "Hello 2, " + person;
}
var user2 = "Alejandro Onofre";
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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter4(person) {
    return "Hello class, " + person.firstName + " " + person.lastName;
}
var user4 = new Student("Alejandro", "Ing.", "Onofre");
document.body.innerHTML = greeter4(user4);

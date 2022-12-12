// const person = {
//     firstName: "Sally",
//     lastName:"Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false
// }

// const person = {
//     firstName: "Sally",
//     lastName:"Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false
// }
// Object.property
// person.firstName
// console.log(person.firstName)

// const person = {
//     firstName: "Sally",
//     lastName:"Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false
// }
// Object.property
// person.firstName
// console.log(person["age"])


// const pet = {
//     firstName: "Jaguar",
//     age: 4000,
//     typeOfPet: "Cat",
//     colour: "Grey"
// }
// Object.property
// pet.firstName
// console.log(` My cat is ${pet.colour} and is ${pet.age} years old`)


// const pet = {
//     firstName: "Jaguar",
//     age: 4000,
//     typeOfPet: "Cat",
//     colour: "Grey"
// }
// Object.property
// pet.firstName
// console.log(` My cat is ${pet.colour} and is ${pet.age} years old`)

// const person = {
//     firstName: "Sally",
//     lastName:"Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false
// }
// // Object.property
// person.homeOwner = true
// console.log(person)


// const pet = {
//     firstName: "Jaguar",
//     age: 4000,
//     typeOfPet: "Cat",
//     colour: "Grey"
// }
// Object.property
// pet.colour = "Orange"
// console.log(` My cat is ${pet.colour} and is ${pet.age} years old`)

// let day = "Monday"

// const person = {
//     firstName: "Sally",
//     lastName:"Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["Tennis","Gardening", "Bungee Jumping"]
// }
// Object.property
// person.firstName
// console.log(person.firstName)
// if (day === "Saturday" || day === "Sunday") {
//     console.log(`Great it's ${day},let's play ${person.hobbies[0]}!`)
// }else{
//     console.log(`Oh no! It's ${day} I hate being a ${person.occupation}"`)
// }


// const person = {
//     firstName: "Sally",
//     lastName:"Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["Tennis","Gardening", "Bungee Jumping"],
//     marketingOp () {
//         if (this.HomeOwner == false && this.age > 25){
//             return "send mortgage offer email."
//         }
//         else if (this.HomeOwner == false && this.age < 25){
//             return "pension infestment offer."
//         }
//         else {
//             return "send sensible Savings offer."
//         }
//     }

// }

// console.log(person.marketingOp())


class Pet {
    constructor(name, age, type, breed, colour, time) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}`;
    }
}

const bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "8:00");
console.log(bella.feedPet("15:00"));

class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime) {
        super(name, age, type, breed, colour, time);
    }
    givesMeds (time) {
        this.lastMeds = time;
        return `Last meds updated to: ${this.lastMeds}  for ${this.name}`;
    }
}

const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "8:00");
const Barney = new PetMeds("Barney", 4, "Cat", "Don-short", "B&G", "10:00", "13:00" );
const Betty = new Pet("Betty", 4, "Dog", "SH", "White", "10:00");
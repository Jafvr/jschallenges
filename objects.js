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


const person = {
    firstName: "Sally",
    lastName:"Evans",
    age: 27,
    occupation: "Sales assistant",
    married: false,
    homeOwner: false,
    hobbies: ["Tennis","Gardening", "Bungee Jumping"],
    marketingOp () {
        if (this.HomeOwner == false && this.age > 25){
            return "send mortgage offer email."
        }
        else if (this.HomeOwner == false && this.age < 25){
            return "pension infestment offer."
        }
        else {
            return "send sensible Savings offer."
        }
    }

}

console.log(person.marketingOp())
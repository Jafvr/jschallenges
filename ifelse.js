// let hunger = "full"

// if (hunger == "hungry") {
// }

// else if (hunger == "full") {
// // you can have as many as else if as you like
//     console.log("no thanks, I'm stuffed!")
// }

// else{
//     console.log("oh go on then, why not!")
// }

// let music = "latino rap"

// if (music == "Good music") {
// }

// else if (music == "Awful") {
// // you can have as many as else if as you like
//     console.log("no thanks, turn it off!")
// }

// else{
//     console.log("oh go on then, play it!")
// }


// if (4 === "4") {
//     console.log(true)

// }
// else{
//     console.log(false)
// }

// if (4 != "4") {
//     console.log(true)

// }
// else{
//     console.log(false)
// }

// let food = "ice cream"
// let hunger = "full"

// if (hunger == "full" && food == "ice cream"){
//     console.log("of course, who wouldn't")
// }
// else if (hunger == "hungry" && food == "ice cream") {
//     console.log("yes please i'm starving, could i also have a pizza")
// }
// else if (hunger =="hungry" && food == "sprouts") {
//     console.log("actually, I can wait")
// }
// else{
//     console.log("no thanks, i'm stuffed")
// }


// let food = "chips"

// if (food == "ice cream" || food == "pizza"){
//     console.log("Yay let's go eat!!!")
// }
// else if (food == "sprouts" || food == "broccoli"){
//     console.log("ugh, no thanks")
// }
// else{
//     console.log("okay, go on then why not.")
// }

let food = "sprouts"

switch(food) {
    case "ice cream":
    case "pizza":
    console.log("Yay, let's eat")
    break
    case "sprouts":
    case "broccoli":
        console.log("ugh,no thanks!")
    default:
        console.log("okay, go on then, why not")
}
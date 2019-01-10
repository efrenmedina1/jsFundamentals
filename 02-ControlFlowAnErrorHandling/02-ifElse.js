let money = false

if (money) {
    console.log{'Starbucks'
} else {
    console.log('Make Coffee')
}

let weather = 75

if (weather < 70) {
    console.log('Wear a Jacket')
} else {
    console.log('No jacket necessary')
}

let myName = 'harRy'

let str = 'HarRy';
let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
console.log('Original String:', str); 
console.log('New String:', newStr);

string MyName='harRy'

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
capitalize("alfredo")  // => "Alfredo"
capitalize("Alejandro")// => "Alejandro
capitalize("ALBERTO")  // => "Alberto"
capitalize("ArMaNdO")  // => "Armando"

let str = 'SenAS'
if (str[0] === str[0].toUpperCase()) {
    let firstLetter = str[0] + str.slice(1).toLowerCase(
        console.log(firstLetter)
    )
} else {
    let otherLetters =str.charAt(0).toUpperCase(= str.slice(1).toLowerCase())
    console.log(otherLetters)
}

//* Correct code

let str = 'SebAstian'
if (str[0] === str[0].toUpperCase()) {
  let firstLetter = str[0] + str.slice(1).toLowerCase()
  console.log(firstLetter)
} else {
  let otherLetters = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  console.log(otherLetters)
}
let newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
console.log(newStr)

let weather = 40

if (weather > 70) {
    console.log('wear a t-shirt')
} else if (weather <= 70 && weather > 50) {
    console.log('Wear a light jacket')
} else {
    console.log('Stay inside')
}

let age = 25

if (age < 17) {
    console.log('Cannt do anything')
} else if (age >= 18 && age < 21) {
    console.log('you can vote')
}
else if (age >= 21 && age < 25) {
    console.log('drink')
}
else {
    console.log('you old')
}

let age = 30
let young = 'Sorry, you\'r too young to do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!'
if (age >+ 25) {
    console.log(rent, drink, vote)
} else if (age >= 21 && age < 25) {
    console.log(drink, vote)
} else if (age >= 18 && age < 21) {
    console.log(drink)
} else {
    console.log(young)
}


let Dessert = 'Pie';

switch(Dessert) {
    case 'Pie':
        console.log('Pie pie pie')
        break;
    case 'Cake':
        console.log('Cake Cake Cake')
        break;
     case 'Ice Cream':
        console.log('Ice Cream Ice Cream?')
        break;
    default: 
        console.log('Cake is a lie')
}
  
}
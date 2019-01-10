// Fat arrow Fuction

function coffee(" Coffee is life!") {

}

// not >=

let coffee = () => {
    console.log("Coffee is cool")
}

coffee();

var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`);
}

cats(1, 35)

let fatArrows = (x) => console.log(x);

fatArrows('thisis a function, nothing to see');

let namingMachine = (fname, lname) => (fname,lname)
console.log(namingMachine("Tom","Hiddleston"));

var one = "ONETHING";
var two = "SECOND";

let news = `${one, two}`;
console.log(news);

//Create two fuctions
//first take a string parameter and captitalize it
//first return that string;

//second - string as a parameter and then lower case
//console.log results

function Name()var studentName = ('boBBy')
var capName;

for (let n in studentName) {
    if (n == 0) {
        capName = studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLowerCase();
    }
}
console.log(capName)




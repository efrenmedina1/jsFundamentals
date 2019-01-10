function hi() {
    console.log('hi')
    return "hey";
}

hi;
hi();

console.log(hi);
console.log(hi());

// challenge:
// creater fuction that when invoked lists out numbers 1 - 10

for (var i= 0; i < 10; i++) {
    console.log(i)
}

function poop() {
    for(var i = 0; i <= 10; i++) {
    console.log(i)
}
    return "done!";
}

poop();
console.log(poop())

// Challenge:
//Given the array create a funtion that lists out the values indiviually
var str = "hello";


for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
  }

let arr = [ "this", "is", "really","cool"];

function Tool() {
    for (let arr = 0; arr < str.length; arr++) {
        console.log(str.charAt(arr));
    
}

Tool();
console.log(Tool())
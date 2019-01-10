/*
What is scope?

JS has both LOCAL and GLOBAL scope

Local = like Indianapolis
Global = like Earth

Can still be on the world when you are in Indy, but you are not necessarily in Indy when you are on the planet
*/

x = 12

function scope() {
  x = 33
  console.log(x);
}
scope();
console.log(x); 

//* let vs Var

var y = 12;

function varlet() {
    var y = 33
    if (true) {
    let y = 45;
    console.log(y);
    }
    console.log(y);
}

varlet();
console.log(y);

function constTest() {
    const scope=1;
    if (true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

constTest();


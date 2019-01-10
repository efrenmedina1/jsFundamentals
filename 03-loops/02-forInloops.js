var student = { name: "Harry", awesome: true, degree: "JavaScript", week: 1}

for(item in student) {
    console.log(item);
    console.log(student[item])
}

var pieArray = ['cherry','apple', 'chocolate peanut butter', 'chickenpot'];
    for (let pie in pieArray) {
        console.log(pie);
    }

var studentName = ('hARRY', 'boBBy')
var capName;

for (let n in studentName) {
    if (n == 0) {
        capName = studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLowerCase();
    }
}
console.log(capName)
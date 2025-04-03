// convert string into uppercase or lowercase
let school = 'RAJUK Uttara model school';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

// compare string case sensitivity problems using toLowerCase()
const subject = "Chemistry";
const book = "chemistry";

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('same genre');
}
else{
    console.log('different genre');
}


// compare string white spacing related problems using trim()
const liquid = " water";
const drink = "water ";
if(liquid.trim() === drink.trim()){
    console.log('same material');
}
else{
    console.log('different material');
}
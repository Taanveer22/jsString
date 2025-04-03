// reverse string letters--------------------------------------


// method 01
// using for --- of loop
const sentence = "I am learning web development";
let reverse = "";
for (let letter of sentence) {
  // console.log(letter);
  reverse = letter + reverse;
}
// console.log(reverse);



// method 02
// using basic for loop
let rev = "";
for (let i = 0; i < sentence.length; i++) {
  // console.log(i);
//   console.log(sentence[i]);
  rev = sentence[i] + rev;
}
// console.log(rev);



// method 03
// using shorcut js different types method
let r = sentence.split('').reverse().join('');
console.log(r);

// problem 01
let word = "Angular";
let count = 0;
for (let i = 0; i < word.length; i++) {
  console.log(i);
  console.log(word[i]);
  if (word[i] === "a") {
    count++;
  }
}
console.log(count);

// problem 02
// using toLowerCase() solve case-sentitivity issue
let givenString = "Arbitary";
let countSingleLetter = 0;
for (let j = 0; j < givenString.length; j++) {
  console.log(j);
    console.log(givenString[j]);
  if (givenString[j].toLowerCase() === "a") {
    countSingleLetter++;
  }
}
console.log(countSingleLetter);

// problem 03
let oddWord = "facetiously";
let checkLetter1 = "a";
let checkLetter2 = "e";
let checkLetter3 = "i";
let checkLetter4 = "o";
let checkLetter5 = "u";

let letterPresent = oddWord.includes(
  checkLetter1,
  checkLetter2,
  checkLetter3,
  checkLetter4,
  checkLetter5
);
console.log(letterPresent);

// another way of problem 03
let buzzWord = "javacript";

let presentCharacter = buzzWord.includes("a" && "e" && "i" && "o" && "u");
console.log(presentCharacter);

// problem 04
let originalString = "Xerox";
console.log(originalString);

let xInvolve = originalString.includes("x" && "X");
console.log(xInvolve);

let repalcedString = originalString.replace("x", "y");
console.log(repalcedString);

let repalcedString2 = repalcedString.replace("X", "Y");
console.log(repalcedString2);

// problem 05
let sentence = "freecodecamp is an awesome resource";
console.log(sentence);
let words = sentence.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++) {
  console.log(i);
  console.log(words[i]);
  console.log(words[i][0]);

  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  console.log(words[i]);
}

let capitalizeWords = words.join(" ");
console.log(capitalizeWords);

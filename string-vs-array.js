// string is immutable => elements not changable
// array is mutable => elements changable

let numbers = [2, 4, 6, 8, 9];
console.log(numbers);
console.log(numbers.length);

// we can acess array elements by square braces
console.log(numbers[0]);
console.log(numbers[1]);

// we can update array elements by square braces
numbers[2] = 22;
console.log(numbers);



/**----------------------------------------------------------------------- */

let country = "Bangladesh";
console.log(country);
console.log(country.length);

// we can access string letters by array like square brackets
console.log(country[0]);
console.log(country[1]);


// we can not update string letters by square brackets
country[0] = "F";
console.log(country);
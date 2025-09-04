alert("This is the file which contains the types of functions in the Java Script.\n");

// simple function decleration

function sub(a, b){
    return a - b;
}

// calling the function

let a = prompt("Give the value of a");
let b = prompt("Give the value of b");
let s = sub(a,b);
// console.log(s);

console.log("The substraction of "+a+" and "+b+" is = "+sub(a,b));




// making arrow function in java script
var n = 5;
var m = 6;

let sum = (n, m) => {
    return n + m;
};

console.log("The addition of " + n + " and " + m + " is = " + sum(n, m));






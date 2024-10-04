// Declare variables
let x;
let y;

// Assign values
x = 7;
y = 13;

// Arithmetic Operations
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;

// Display results in console
console.log("X:", x);
console.log("Y:", y);
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Reassignment operators
x += 6;
y += 8;

// Display new values
console.log("Updated X:", x);
console.log("Updated Y:", y);

// Comparison Operators
let isEqual = x == y;
let isGreaterThan = x > y;
let isNotEqual = x != y;

// Display results in console
console.log("Is X equal to Y?", isEqual);
console.log("Is X greater than Y?", isGreaterThan);
console.log("Is X not equal to Y?", isNotEqual);

// Apply logical operators
let isPositive = x > 0 && y > 0;
let isEven = x % 2 == 0 || y % 2 == 0 ;
console.log(`Are both numbers positive? ${isPositive ? "Yes" : "No"}`);
console.log(`Is at least one number even? ${isEven ? "Yes" : "No"}`);
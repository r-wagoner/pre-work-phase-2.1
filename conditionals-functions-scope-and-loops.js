/*
Conditionals, Functions, Scope. and Loops
 */
/*
//Equals
let equ = 1 === 1;
console.log(equ);

//Greater Than
let greaterThan = 5 > 1;

//Less Than
let lessThan = 2 < 10;

//Greater Than or Equal To
let greaterThanEq = 5>= 5;

//Less Than or Equal To
let lessThanEqEq = 4 <= 9;

//Not Equal
let notEquals = 5 !== 2;

// === standard comparison operator not compatible with different types
// coercion between types can be prevented by using ==

 */
/*
let storeA = 5.10;
let storeB = 5.10;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);

if (storeAIsLower) {
    console.log("Store A has a lower price.")
} else if (storeB < storeA) {
console.log("Store B has a lower price.")
} else {
    console.log("Their prices are equal.")
}
*/
//Else will always execute if previous comparisons are false.

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
    console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}
compareStorePrices(3.10, 2.25)
//compareStorePrices(10,5);
//compareStorePrices(7,10);

function squareNum(number){
    return number * number;
}
let squaredNum = squareNum(10);
console.log(squaredNum);

//functions should only do one thing and be no longer than 20 lines of code.
/*

let x = 10;
function addNumbers (n, m, x) {
   console.log(x);
   let b;
   if (1 === 1) {
       b = 8;
   }
   console.log(b);
    return n + m;
}

addNumbers(1, 2, 10);

//Scope: global, function, and block

//Arrays

//indices reference positions within the array.

 */

//
/*
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];

let newArr = ourArray[4];
console.log(newArr[0]);
 */

//LOOPS: If we don't' know how long our arrays are, we can use loops to repeat a portion of code until a certain condition is met.

//"for loop" has a counter, a comparison, and an incrementor. The variable used is "i".
let ourArray = [1, 2, 3, 4, 5, 6, 7];
let arrLen = ourArray.length;

for(let i = 0; i < arrLen; i++){
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
}

//when you place a loop inside another loop, the inner loop will run for every time the outer loop completes.

//"while loop:" runs until a conditional is false.

let x = 0;
while(x < 10 ) {
    console.log('Ran');
    x = x + 1;
}










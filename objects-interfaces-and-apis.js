/*
*Objects, Interfaces, and API's
*/

//Object Oriented Programming

//represent data and functionality in an encapsulated way
// key features: state and functionality
/*

let dog ={
    name: "Steve",
    color: "brown",
    size: "Small",
    bark: function (){
       console.log("Bark!");
    },
};

dog.bark();
 */

//key bark serves as the function name

// some objects don't have data, some don't have functions. If there are both they must be related.
// Interface vs Implementation has to do with function od object. Interface is the function's signature, signature is the name (bark) and the parameters (none).
// Implementation (console.log "Bark!"). Don't concern with implementation (under the hood) which should be invisible except to the object. Only be concerned with interface and what the function returns.
let dog ={
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function (typeOfBark){
        console.log("Bark!");
    },
};

dog.bark();

// API's:
// Application Programming Interface. APIs allow you to interact with other people's tech. Example: Load video pla video and skip ahead. API's use URLs instead of functions.


// Passing data by value vs passing data by reference. When sending data to a function via its parameters there are two ways it can be passed. By value means inside the function only the value of the data is important. The data is copied for use inside the function. Passing by reference means the actual data is only being referenced. The data can be changed in another location.

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};

x(y);
console.log(y);

//num outside and inside the function are the same. Because objects in js are passed in by reference. Anything we do inside a function to an object is translated to the object we originally passed in. The object is not copied.








"use strict";
// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//const add = (a: number, b: number = 1) => a + b;
var printOutput = function (output) {
    console.log(output);
};
//printOutput(add(2));
var button = document.querySelector("button");
if (button) {
    button.addEventListener("click", function () {
        console.log(add(1, 8));
    });
}
var hobbies = ["sports", "cooking"];
var active = ["hiking"];
active.push.apply(active, hobbies);
console.log(active);
var person = {
    firstName: "max",
    age: 34,
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
var add = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1], hobbie = hobbies.slice(2);
console.log(hobby1, hobby2);
var userName = person.firstName, age = person.age;
console.log(userName, age, person);

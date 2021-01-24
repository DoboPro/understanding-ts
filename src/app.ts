// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

//const add = (a: number, b: number = 1) => a + b;

const printOutput: (output: number) => void = (output) => {
  console.log(output);
};

//printOutput(add(2));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    console.log(add(1, 8));
  });
}

const hobbies = ["sports", "cooking"];
const active = ["hiking"];

active.push(...hobbies);

console.log(active);

const person = {
  firstName: "max",
  age: 34,
};

const copiedPerson = {
    ...person,
};

console.log(copiedPerson);

const add = (...number: number[]) => {
    return number.reduce((curResult,curValue) => {
        return curResult + curValue;
    },0);
};

const addedNumbers = add(5,10,2,3.7);
console.log(addedNumbers);

const [hobby1,hobby2,...hobbie] = hobbies;
console.log(hobby1,hobby2);

const {firstName: userName,age} = person;

console.log(userName,age,person);
// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunction(42);
// calc();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addOne(41));

// console.log(addTen(10));
// console.log(addTen(41));

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person:  ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Peter", age: 35, job: "FrontEnd" };
const person2 = { name: "Lora", age: 25, job: "SMM" };

bind(person1, logPerson)();
bind(person2, logPerson)();

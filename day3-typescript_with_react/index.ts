// let a = 90;
// a = 30;
// console.log(a);

// PHASE 2: Objects and Functions

// - Object Types

// type UserObj = {
//   name: string;
//   age: number;
//   company: string;
//   address: {
//     street: string;
//     city: string;
//     state: string;
//   };
//   employeeId?: string; // objectional chaining
// };

// let userObj: UserObj = {
//   name: "amit",
//   age: 26,
//   company: "sheryians",
//   address: {
//     street: "ganesh chowk",
//     city: "raigarh",
//     state: "C.G.",
//   },
// };

// userObj.name = "sanjeet";
// console.log(userObj);

// - Function Types

// function addNum(a: number, b: number): number {
//   return a + b;
// }
// let result: number = addNum(10, 20);
// console.log(result);

// function addNum(a: number, b: number): void {
//   console.log(a + b);
// }
// addNum(85, 98);

// function addNum(a: number, b: () => number): number {
//   console.log(a);
//   let data = b();
//   return data;
// }
// addNum(85, () => {
//   return 10;
// });
// interview questions
// let sum = (a: number) => {
//   return (b: number) => {
//     if (b !== undefined) return sum(a + b);
//     return a;
//   };
// };
// let data = sum(85)(17)(17)();
// console.log(data);

// - Optional Parameters
// - Default Parameters
// - Rest Parameters

let sum = (...rest: number[]) => {
  let data = rest.reduce((a, v) => a + v, 0);
  return data;
};
let res = sum(658, 845, 8, 58, 8, 4, 8, 56, 5);
console.log(res);

// - Type Aliases
// - Interfaces

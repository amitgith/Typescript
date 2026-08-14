// let a = 90;
// a = 30;
// console.log(a);

// PHASE 2: Objects and Functions

// - Object Types

type UserObj = {
  name: string;
  age: number;
  company: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
};

let userObj: UserObj = {
  name: "amit",
  age: 26,
  company: "sheryians",
  address: {
    street: "ganesh chowk",
    city: "raigarh",
    state: "C.G.",
  },
};

userObj.name = "sanjeet";
console.log(userObj);

// - Function Types
// - Optional Parameters
// - Default Parameters
// - Rest Parameters
// - Type Aliases
// - Interfaces

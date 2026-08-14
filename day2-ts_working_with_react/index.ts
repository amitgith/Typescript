// - Type Inference and Annotation
// let a: string = "amit";
// a = "sanjeet";
// a = "pol";
// console.log(a);

// - Primitive Types
// N -number
// let a: number = 56;
// N - null
// let empty: null = null;
// B - bigint
// let bigint: bigint = 5566455n;
// B - boolean
// let istrue: boolean = true;
// S - string
// let b: string = "amit";
// S - symbol
// let s: symbol = Symbol("hello");
// U - undefined
// let u: undefined = undefined;

// - Arrays
// any
// let a: any = 879;
// a = "sita";
// a = true;
// unknown
// let a: unknown = 879;
// a = "sita";
// a = true;

// never

// let a:never = "amit";
// console.log(a.toUpperCase());

// let a: never;
// let arr: any[] = [1, 2, 3, true, false, "amit", 12566454n, null, undefined];

// - Tuples
// let arr: [number, string, boolean] = [12, "amit", true];
// let data: [
//   { name: string },
//   { age: number },
//   { istrue: boolean },
//   { isEmpty: null },
// ] = [{ name: "amit" }, { age: 26 }, { istrue: false }, { isEmpty: null }];
// - enum - options
// enum Role {
//   ADMIN,
//   SUP_ADMIN,
//   USER,
// }
// let role: Role = Role.USER;
// - Any vs Unknown vs Never
// - Union Types
// let yolo: number | string = "amit";
// yolo = 26;

// - Literal Types
type Status = "pending" | "success" | "error";
// let status = "damage" // not available
let status: Status = "success";

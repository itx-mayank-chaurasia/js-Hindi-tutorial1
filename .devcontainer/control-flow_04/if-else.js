//conditional oprator 
// <, >, ==, <=, >=, !=, ===, !==
// this is used in if else statements
// logical oprator ==> logical and &&, logical or ||, logical not !

// *********** switch case statements **************
 
// switch (key) {        // syntax
//     case value:
        
//         break;

//     default:
//         break;
// }

// ++++++++++++ truthy and falsy values +++++++++++

// falsy => false, 0, -0, bigInt 0n, "", null, undefined, Nan

// truthy => true, "0", "false", " ", [], {}, function() {}

// const aray1 = [];
// if (aray1.length === 0) {
//     console.log("array is empty");  // how to check array is empty or not
    
// }

// const obj = {
//     name:"mayank"
// };
// if (Object.keys(obj).length === 0) {
//     console.log("this object is empty");
                                                           // how to check object is empty or not
// }else{
//     console.log(`this array has a`, Object.keys(obj).length, `keys`);
// }

// Nullish coalescing oprator (??): Null, undefined

// iska use jab database se multiple value aarhi hoti hai to usme se kisko print krna hai ke liye kia jata hai spacial [null, undefined]

let val1 = 10 ?? 15;
let val2 = null ?? 15;
let val3 = undefined ?? 15;
let val4 = null ?? undefined ?? 10;
let val5 = null ?? 15 ?? 10;
let val6 = null ?? undefined
console.log(val1, val2, val3, val4,val5, val6);

// Ternary oprator (?);
let a = 10;
a < 10 ? console.log("a is less then 10") : console.log("a is equalto 10");



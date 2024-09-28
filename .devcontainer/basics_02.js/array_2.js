
const myarr1 = [1,2,3];
const myarr2 = [1,2,3];
const new_myarr = myarr1.push(myarr2); // push one array into anothor arary
console.log(myarr1[3][1]); // for find element in array ke andar wale array se
console.log(myarr1);
console.log(myarr1.concat(myarr2));       // join two array and make one new arary
const mynewarr = [...myarr1,...myarr2]; //spread method means sare element ko ek arrey me prinit krna
console.log(mynewarr);
const array4 = [1, 2, 3, [4, 5, 6], 4, [7, 8, 9, [1, 2, 3, 4]]]; // array ke andar array
console.log(array4.flat(Infinity)); // flat method means array ke andar jitne bhi array hai un sab ko ek hi array me lana
console.log((Array.isArray("mayank")));
console.log((Array.from("mayank"))); // convert snythig to array
console.log(Array.from({name:"mayank"})); //intresting case for interviews

let marks1 = 100;
let marks2 = 200;
let marks3 = 300;
let marks4 = 400;
let marks5 = 500;
let marks6 = 600;
let marks7 = 700;
let marks8 = 800;

console.log(Array.of(marks1,marks2,marks3,marks4,marks5,marks6,marks7,marks8)); // convert variable or anothe things to array
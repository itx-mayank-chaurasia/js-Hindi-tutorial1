let a = 10
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c); // they all run

if(true){
   // console.log(a); // not run global scope
   // console.log(b); // not run global scope
    console.log(c); // run because var is run global and local scope both
}
console.log(one("mayank")) //we can call the function before daclaration of function but with this declation method
function one (name){
    return name;
    
}

// we can not call the function before daclaration of function with this declation method
console.log(two("mayank"))    // we phase error [Cannot access 'two' before initialization]
const two = function (name) {
    return name;
}
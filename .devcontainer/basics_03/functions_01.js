function printMyNAme () {      // function declaration 

     console.log("mayank");    // function defination
}

// printMyNAme();                // function calling

function sumtwoNumbers (num1, num2) {
    let sum = num1+num2;
    console.log(sum);                   // without return value [void function]

}
// sumtwoNumbers(10, 20);
function sumtwoNumbers (num1, num2) {
    let sum = num1+num2;
    return sum = num1 + num2;
                                       // longest way
}
let result = sumtwoNumbers(10, 20);
// console.log(result);

function sumtwoNumbers (num1, num2) {
    return num1 + num2;
                                  // shortest way
}
// console.log(sumtwoNumbers(10, 20));


function loginusermassage(username) {
    if (username == undefined) { // agar condition di jati h to if ke andar ki statements run hoti hai
        console.log("please enter your name");
        return;
    }
    return ` ${username} you'r now just logged in our site \n so very verry welcome and i hope you are also Good`
}
//  console.log(loginusermassage("mayank"));


function loginusermassage(username) {
    if (!username) {                      // agar [ ! ] lagate h condion me to else ke statements run hoti hai
        console.log("please enter your name");
        return;
    }
    return ` ${username} you'r now just logged in our site \n so very verry welcome and i hope you are also Good`
}
//  console.log(loginusermassage(""));

function loginusermassage(username = "hello user") {   // default value jese hi value pas ki jayegi to overight ho jayegi
    if (username === undefined) {
        console.log("please enter your name");
        return;
    }
    return ` ${username} you'r now just logged in our site \n so very verry welcome and i hope you are also Good`
}
// console.log(loginusermassage());

// +++++++++++++++++++++++++++++++***function with object***+++++++++++++++++++++++++++

function calculateCartvalue (vl1, vl2, num1) { // agar parameter gi ginti pta nhi h kitni aane wali hai to uske liye spreat[...] ka option use krte hai
    return num1;
}
// console.log(calculateCartvalue(100, 149, 199, 499, 299, 549)); // agar parameter ek hi pass kia hai to first value print hogi
function calculateCartvalue (vl1, vl2, num1) { // ese me vl1 aur vl2 starting ki 2 value take kr lete hai aur baki num1 ko de dete hai
    return num1;
}
// console.log(calculateCartvalue(100, 149, 199, 499, 299, 549)); // agar parameter ek hi pass kia hai to first value print hogi
function calculateCartvalue ( ...num1) { // ise vah e array k form me convert kre print krta hai
return num1;
}
// console.log(calculateCartvalue(100, 149, 199, 499, 299, 549)); // agar parameter ek hi pass kia hai to first value print hogi

const user = {       // not complesurry to creat object and pass in function
    name: "mayank",
    price: 999
}
function handleobject (anyobject) {  //koi bhi object le skte hai
    console.log(`username is ${anyobject.name}\nprice is ${anyobject.price}`);
}
//  handleobject(user);

// we can declare object in function as  a aarguments
function handleobject (anyobject) {
    console.log(`username is ${anyobject.name}\nprice is ${anyobject.price}`);
    
}
// handleobject({
//     name: "mayank",
//     price: 999
// })

//************************************ functions with arrays*****************************/

// #1
const MyArray = [199, 899, 149, 299, 1099, 799]; //declare time aray
function returnSecendValue (getarray) {
    return getarray[0]       // for to get full array
}
 console.log(returnSecendValue(MyArray))
// #2
function returnSecendValue (getarray) {
    return getarray;       // for to get any element of selected array
}
console.log(returnSecendValue(MyArray));
// #3
function returnSecendValue (getarray) {
    return getarray[2];       
}
console.log(returnSecendValue([99, 199, 299, 399, 499])); // calling time aray

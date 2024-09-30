function printMyNAme () {      // function declaration 

     console.log("mayank");    // function defination
}

printMyNAme();                // function calling

function sumtwoNumbers (num1, num2) {
    let sum = num1+num2;
    console.log(sum);                   // without return value [void function]

}
sumtwoNumbers(10, 20);
function sumtwoNumbers (num1, num2) {
    let sum = num1+num2;
    return sum = num1 + num2;
                                       // longest way
}
let result = sumtwoNumbers(10, 20);
console.log(result);

function sumtwoNumbers (num1, num2) {
    return num1 + num2;
                                  // shortest way
}
console.log(sumtwoNumbers(10, 20));


function loginusermassage(username) {
    if (username == undefined) { // agar condition di jati h to if ke andar ki statements run hoti hai
        console.log("please enter your name");
        return;
    }
    return ` ${username} you'r now just logged in our site \n so very verry welcome and i hope you are also Good`
}
 console.log(loginusermassage("mayank"));


function loginusermassage(username) {
    if (!username) {                      // agar [ ! ] lagate h condion me to else ke statements run hoti hai
        console.log("please enter your name");
        return;
    }
    return ` ${username} you'r now just logged in our site \n so very verry welcome and i hope you are also Good`
}
 console.log(loginusermassage(""));

function loginusermassage(username = "hello user") {   // default value jese hi value pas ki jayegi to overight ho jayegi
    if (username === undefined) {
        console.log("please enter your name");
        return;
    }
    return ` ${username} you'r now just logged in our site \n so very verry welcome and i hope you are also Good`
}
console.log(loginusermassage());
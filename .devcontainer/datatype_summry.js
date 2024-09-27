// MOSTLY DATA TYPE ARE TWO TYPES

// #1 primitive data type 7types ==> number, string, boolean, null, undefined, symbol, bigInt 
// #2 reffrence (not-primitive data type) 3types ==> array, object, function {data type is => object}

// let number = 10 #number
// let name = "mayank" # string
// let isnumber = true #boolean
// let temprature = null #object
// let roll_number; #undefined
// const bignumber = 101214851364313154968n #bigInt
// const score1 = Symbol('221') they are 7 primite data types #Symbol
// const score2 = Symbol('221') #Symbol

// console.log(score1===score2); false beacuse they are tottly diff 
// console.log(typeof bignumber); this is a investigation

// let myarray = ["mayank", "sanskar", "krishna", "radha"] array => datatype is object
// console.log(myarray);

// let myobj = {
//     str: "str1", object => datatype is object
//     age:18
// }
// console.log(myobj);

// const myfunction = function(){
//     console.log("hello world"); function => datatype is object
// }
// ++++++++++++++++++++++    stack__and__heap       +++++++++++++++++++++++++++++
// stack(primitive) and heap (non-primitive)

// let myyoutubechannel_1 = "mayank chaurasia"
// let myyoutubechannel_2 = myyoutubechannel_1
// myyoutubechannel_2 = "speackcodecrunch"            ***stack me value ki copy assign ki jati hai***
// console.log(myyoutubechannel_1);
// console.log(myyoutubechannel_2);

// let user1 = {
//     email: "abc1@gmail.com",
//     upi: "2154@ybl"
// }
// let user2 = user1
// user2.email = "mayank@google.com"          *** heap me orignal value reffrence ki jati hai isliye kisi doosre nonprimitve me change krne par phle wale me change ho jata hai jabki stack me kewal uski copy change hoti hai ***
// user2.upi = "5412@ibl"
// console.log(user1.email);
// console.log(user1.upi);


// console.log(user2.email);
// console.log(user2.upi);


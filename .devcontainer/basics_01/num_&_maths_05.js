const num = 100
const new_num = new Number(100.213) //number as a object
console.log(num,new_num);
console.log(typeof new_num.toString()); //convert to string and type also change in string output "string [100]"
console.log(new_num.toFixed(2)); //to fixed after will comes ".(decomal)" value output "100.21"
console.log(new_num.toPrecision(4)); // how many digits we will want to precesion the number output "100.2"
const hundreds = 10000
console.log(hundreds.toLocaleString('en-IN')); //convert to indian number system output "10,000"

//++++++++++++++++++maths++++++++++++++++++

 console.log(Math); //its a function
console.log(Math.abs(-895)); //for convert negetive value to positive output "895"
console.log(Math.round(2.5)); //for round the value output "3"
console.log(Math.ceil(25.01)); // decimal se thoda sa bhi jyada hua to use bade digit me round kr dega
console.log(Math.floor(25.9)); // decimal se kitna bhi  jyada h0 to use chhote digit me round kr dega
console.log(Math.sqrt(144)); //find sqrt
console.log(Math.min(2,5,8,5,2,4,)); //find minimum
console.log(Math.max(2,5,8,5,2,4,)); // find maximum 
console.log(Math.floor(Math.random() * 10) +1);

const min =1
const max =9999
console.log(Math.floor(Math.random() * (max-min)) + min);  //creat any random number (uses i.g. otp)

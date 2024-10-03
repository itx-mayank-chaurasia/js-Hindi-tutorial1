//+++++++++++++++****************:--> for of loop <--:************++++++++++++++++++++

const myarr  = ["m", 1, 2,  true, null, undefined, NaN, 3.2, false, "radha radha radha mohan"]
for (const i of myarr) {
    // console.log(i);
    
}
const mymap = new Map();
mymap.set('IN', 'India');
mymap.set('USA', 'United State Of America');
mymap.set('UK', 'United Kigdom');
mymap.set('FR', 'france');
// console.log(mymap);
for (const [keys, values] of mymap) {     // for of loop me key aur value ko ek sath access kene ke liye [keys, values] likh dete hai
             // ese me  esa output aata hai[ 'IN', 'India' ]
                                //         [ 'USA', 'United State Of America' ]
                                //         [ 'UK', 'United Kigdom' ]
                                //         [ 'FR', 'france' ]

    // console.log(`${keys}:-->${values}`);  // ese me esa output aata hai
                                // IN India
                                // USA United State Of America
                                // UK United Kigdom
                                // FR france
}

//arrays, string, map i.e. ke liye
// for of loop me vah uski values ko access krke print krta hai

const myObject2 = {
    js: "javasacript",
    java: "java",
    py: "puthon",
    cpp: "c++",
    rb: "Ruby"
};
// for (const element of myObject2) {    // myObject2 is not iterable in a for-of-loop
      // console.log(element);
    
// }

//+++++++++++++++****************:--> for in loop <--:************++++++++++++++++++++

// NOTE:--> for in loop me only object me vah uski key access krke print krta hai for ex. js, java, py, cpp, rb

const myObject = {
    js: "javasacript",
    java: "java",
    py: "puthon",
    cpp: "c++",
    rb: "Ruby"
};
for (const key in myObject) {
    // console.log(key);
    
}
// ? kya array ko for in loop se print krw skte sai chaliye dekhte hai

const myarr2 = ["ram", "seeta", "hanuman", "lakhan", "radha-krishna"];
for (const key in myarr2) {
    // console.log(key);    // output is 0, 1, 2, 3, 4
    // console.log(`myarr2 elements is ${myarr2[key]}`); // arrey me values acces krne ke liye in for-in-loop
    
}
// ? kya Map ko for in loop se print krw skte sai chaliye dekhte hai

for (const key in mymap) {  // map is not itereable for-in-loop 
//    console.log(key);
   
}

//+++++++++++++++****************:--> for-Each-loop <--:************++++++++++++++++++++
// #1 way to use forEach
const god = ["ram", "seeta", "hanuman", "lakhan", "radha-krishna"];
 god.forEach(  function (checker) {   //forEach loop
//     console.log(checker);
    
 }  )
// #2 way to use foreach
god.forEach( (checker) => {
    // console.log(checker);
    
} )
function func (item, index, array){  // 1:-> element, 2:-> index number, 3:-> all array element
    // console.log(item, index, array);
}
// god.forEach( func )  //only reffrance dena hai printing ka kam vah khud kar lega

// array ke andar objects
const godpair = [
    {
        godname: "ram",
        godbhaktName: "hanuman"
    },
    {
        godname: "krishn",
        godbhaktName: "mayank"
    },
    {
        godname: "shiv",
        godbhaktName: "ravan"
    }
];
godpair.forEach( (item) => {
    console.log(`${item.godname}:-->${item.godbhaktName}`);
    
} )
// console.log(godpair);

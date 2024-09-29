// Singleton 
//Object.create // cunstructor ke through obj declare krna idme singleton aata hai
// Object literals
const mySym = Symbol("key1");


const JsUser = {     // literals ke through objects declare krna

    "full name": "mayank chaurasia",   // is tarha se key declare krne par ["full name"] ese acces krte hai
    age: 18,
    [mySym]: "key1",
    location: "chhatarpur",
    Email: "mayank@google.com",
    isLoogedin: false,
    lastLoginDay: ["Monday", "tuestday","friday"],

}   
console.log(JsUser["full name"]);
console.log(JsUser.age);
console.log(JsUser.Email);
console.log(JsUser.lastLoginDay[1]);
console.log(typeof JsUser[mySym]);
console.log(JsUser);
JsUser.age = 20;
console.log(JsUser.age);
Object.freeze(JsUser); // obj freeze hone ke bad uske key ko change nhi kr skte 
JsUser.age = 25;
console.log(JsUser.age);


JsUser.greeting = function(){
    console.log(`hello js coder! iam ${this["full name"]} `);
    
}
console.log(JsUser.greeting());

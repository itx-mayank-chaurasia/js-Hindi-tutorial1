let myDate = new Date() //  current date
console.log(myDate); // 2024-09-28T10:10:18.316Z
console.log(myDate.toISOString()); // 2024-09-28T10:11:35.947Z
console.log(myDate.toString()); // Sat Sep 28 2024 15:43:28 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); // Sat, 28 Sep 2024 10:16:56 GMT
console.log(myDate.toDateString());  //Sat Sep 28 2024
console.log(myDate.toJSON());  //2024-09-28T10:18:44.990Z
console.log(myDate.toLocaleDateString()); // 9/28/2024
console.log(myDate.toLocaleTimeString()); //3:52:11 PM
console.log(myDate.toLocaleString()); // 9/28/2024, 3:52:11 PM
console.log(myDate.toTimeString());    // 15:52:11 GMT+0530 (India Standard Time)
console.log(typeof myDate); // obj.

let MyDate = new Date("06-11-2005")
console.log(MyDate.toDateString()); // for creat date ourself

let Timestamp = Date.now();        //****  1 jan 1970 se abhi tk ki date in mili sec.
console.log(Math.floor(Timestamp));//****  and print

let Mycreated = new Date("06-11-2005"); // for creat date ourself
console.log(Math.floor(MycreatedDate.getTime()));      // 1 jan se apne dvara di gai date tak ka time in mili sec.

let MycreatedDate = new Date("11-06-2005"); //"mm-dd-yy" iske andar likhne par vah array jese behave karta hai isliye get + 1 krte hai
console.log(MycreatedDate.getMonth() + 1);   // to get time, date, month, year, full year, i.g.

// console.log(MycreatedDate.toLocaleString('default',{
//     weekday:"long"                                         // in depth we can adjudst date time i.g.
// })
// );
let newdate = new Date(2006,10,11) //"" bina iske likhne par month sahi deta hai
console.log(newdate.getMonth());
console.log(MycreatedDate.toString());

console.log(myDate.getMonth() +1); // default me bhi ek kam btata hai month


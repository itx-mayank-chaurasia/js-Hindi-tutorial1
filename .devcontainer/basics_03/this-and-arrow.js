const user = {
    username: "kanha",
    price: "makhan",
    welcome: function () {
        console.log(`${this.username} , welcome to our site`);
        // console.log(this);    // { username: 'kanha', price: 'makhan', welcome: [Function: welcome] }

    }
}
// console.log(this);           //output is empty "{}"
// user.welcome();              // calling function with object
// user.username = "radhey"  // changing
// user.price = "murli"      // changing
// user.welcome()            // calling function with object

function chai_code() {
    let age = 18;
    console.log(this.sge);  // ise object me acces kr skte hai

}
// chai_code();


const addtwoNum = (num1, num2) => {
    return num1 + num2;                           // explisit return
}
// console.log(addtwoNum(10, 20));
const sumTwoNum = (num1, num2) => (num1 + num2)  // impilisit return

//  console.log(sumtwoNum(10, 20));
const sumOfTwoNum = (num1, num2) => ( num1, num2, { username: "mayank" }) // impilisit return

console.log(sumOfTwoNum(10, 20));



// const tinderUser = new Object(); 1st method to declare obj
// console.log(tinderUser);
mysymbol = Symbol("key1");
const tinderUser = {}; // second method to declare obj
tinderUser.id = "132acb"
tinderUser.name = "mayank"
tinderUser.isloggedin = false
tinderUser[mysymbol] = "key1"
console.log(tinderUser [mysymbol]);

const regularUser = {
    Email: "someone@gmail.com",
    fullname: {
        userFullName: {
            firstName: "mayank",
            lastName: "chaurasia"
        },
        adminFullName: {
            firstName: "radhey",
            lastName: "krishna"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstName);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
console.log(obj1,obj2);  // { '1': 'a', '2': 'b' } { '3': 'c', '4': 'd' }
console.log(Object.assign (obj1,obj2));  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } [{} ye na dene par phle obj me sare obj store ho jate hai]
console.log(Object.assign({}, obj1,obj2,obj3)) // [{} ye dene par isme sare obj store ho jate hai] 
console.log({...obj1, ...obj2, ...obj3}); // same spread methos [mostly usage]

const array = [
    {
        id: "132acd",
        email: "someone@gmail.com"
    },
    {
        id: "132acvb",
        email: "sometwo@gmail.com"
    },
    {
        id: "132acdb",
        email: "somethree@gmail.com"
    },
    {
        id: "132adcb",
        email: "somefour@gmail.com"
    },
    {
        id: "132acbb",
        email: "somefive@gmail.com"
    },
    {
        id: "13b2acb",
        email: "somesix@gmail.com"
    },
];
array[1].email;
console.log(Object.keys(tinderUser)); //convert into array from and store in a array type thats we can easily acces keys
console.log(Object.values(tinderUser)); //convert into array from and store in a array type thats we can easily acces values
console.log(Object.entries(tinderUser)); //convert key and value combo into array 
console.log(tinderUser.hasOwnProperty('islogged')); // islogged this is exist in this object or not


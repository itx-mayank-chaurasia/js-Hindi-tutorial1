// ++++++++++++******:--> filter and map method <--:*****+++++++++++++++

// let array3 = [ 1, 2, 3, 4, 5, 6]
// let a = array3.forEach( (item)=> {
//     console.log(item);
    
// } )
// console.log(a); // undefined

const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = array4.filter( (num)=>{   // conditions check krke us variable ko ya array ki values ko filter krke print krna
    return num != 9 && num != 10;
    // return num > 9  // [10]
    // return num > 10 // []
} );
// console.log(b[6]);    // undefined
// console.log(b);    

//  if want to do filter and creat any condition and return some value without printiong same as filter method withou filter method using forEachloop

const c = [];
array4.forEach( (num) => {
    if (num < 6) {
        c.push(num);
    }
} );
// console.log(c);
// +++++++++++++++++++++++++
let d = array4.filter( (num) => (num%2==0) );
// console.log(`1 to 10 all even numvber is:--> ${d}`);
let e = array4.filter( (num) => (num%2==1) );
// console.log(`1 to 10 all odd numvber is:--> ${e}`);

// ++++++++++++++***:-->books and filter method<--:***+++++++++++++++++

const books = [
    {tile: 'bookone',genre: 'Fiction', publish:1981, edition:2004},
    {tile: 'booktwo',genre: 'non-Fiction', publish:1982, edition:2008},
    {tile: 'bookthree',genre: 'History', publish:1999, edition:2007},
    {tile: 'bookfour',genre: 'non-Fiction', publish:1989, edition:2010},
    {tile: 'bookfive',genre: 'Science', publish:1981, edition:2014},
    {tile: 'booksix',genre: 'Fiction', publish:1985, edition:20010},
    {tile: 'bookseven',genre: 'non-Fiction', publish:1981, edition:2096},
    {tile: 'bookeight',genre: 'History', publish:1985, edition:1916},
    {tile: 'booknine',genre: 'Java', publish:1982, edition:2089},
    {tile: 'bookten',genre: 'Python', publish:1999, edition:2004},
    {tile: 'bookeleven',genre: 'Python', publish:1981, edition:2008},
    {tile: 'booktwelve',genre: 'Java', publish:1991, edition:2007}
];

const genrebooks = books.filter( (checker) => (checker.genre === "History") );
// console.log(genrebooks);
const publishbooks = books.filter( (checker)=> (checker.publish >=1990) );
// console.log(publishbooks);

// +++++++++++++++******rReduce muthod*******+++++++++++++

const  f = array4.map( (element) => (element +1.5) ) //[ false, false, false, false, true,  true, true,  true,  true, true]
// console.log(f);

const g = array4
.map( (num) => (num * 5) )
.map( (num) => (num + 5) )
.filter( (checker) => (checker <= 50) ); // ise chenning kehte hai ise esaly kar skte hai kiu nhi kr skte
// console.log(g);

const addtocart = [1, 2, 3, 4, 5, 6];
const totalvalue = addtocart.reduce((accumltr, curr_value) => {
    // console.log(`accumltr: ${accumltr} curr_value: ${curr_value}`);
    
    return accumltr * curr_value;
},1); // agar initialize na kro to array ki first value ko accumulator cnsume kr leta hai as a initialize value
// console.log(totalvalue);


const cources = [
    {
        courceName: "js",
        price: 2999
    },
    {
        courceName: "react_js",
        price: 2499
    },
    {
        courceName: "java",
        price: 3999
    },
    {
        courceName: "py",
        price: 999
    },
    {
        courceName: "android",
        price: 12999
    },
];
const totl_price = cources.reduce( (accumltr,item) => {
    // console.log(`your items `);
    
    return accumltr + item.price;
},0 );
console.log(totl_price);
// accumulator is a initialize value and curr value is a first value of a array

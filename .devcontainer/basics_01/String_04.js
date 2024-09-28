const name = "mayank "  //*** first methos to declare string
const repocount = 2
console.log(name + repocount);

// console.log(name + repocount); *** old methos and not suitable
console.log(`${name}${repocount}`);

const gameName = new String('dr-driving-game-on-play-store') //modern method to declare String
console.log(gameName.length); //for string length
console.log(gameName[3]); // for which index which caractor is exists
console.log(gameName.toLowerCase()); //convert to lowercase
console.log(gameName.charAt(3)); // for which index which caractor is exists
console.log(gameName.indexOf('d')); //which caractor exists on which index

console.log(gameName.substring(0,3)); // for find substring of a main string
console.log(gameName.slice(-10, 8)); // we can use (-index) in slice method
const userName = "    mayank     "
console.log(userName.trim()); // for remove starting and ening spaces
const url1 = "https://mayank.com/mayank%20chaurasia"
console.log(url1.replace('%20', '-')); // for replace keywords in string
console.log(url1.includes('mayankk')); // for check some keyword is there or not
console.log(gameName.split('-')); // for make any string to array in which add any spacial keyword like as: (-,_,/,\,\, etc)

const gameNAme = ('racing car is running now')
//string method
// console.log(gameNAme.anchor());
let index = 5
console.log(`indesx ${index} par ${gameNAme.at(index)} hai`) // kisi sentance me koi caractor kis index par hai chack krne liye
let word= "carr"
console.log(`the word "${word}" ${gameNAme.includes(word) ? 'is' :' is not'  // check for something word is include or not any string

} in the sentance`,
);


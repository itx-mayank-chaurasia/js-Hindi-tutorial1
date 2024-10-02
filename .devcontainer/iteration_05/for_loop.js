// for loop

for (let i =1; i<=10; i++){
    if(i==6){
    // console.log(`${i} is the lucky number for you`);
        
    }
    // console.log(i);
    
}
for(let i = 1; i<=10; i++){
    // console.log(`table of ${i} is`);
    
    for(let j =1; j<=10; j++){
        // console.log(i + ' * ' + j + "  =  " + i*j);
        
    }
    
}
const myarray = ["kanha", "radha", "madhav"]
for (let index = 0; index < myarray.length; index++) {
    // let element = myarray[index]  // ye bhi shi h
    console.log(myarray[index]);     // ye short m h
   
}

// ********break and continue***********

for (let index = 1; index <=10; index++) {
    if(index == 6){
        // console.log(`detected ${index}`);
        break;      // break means iteration se bahar fek dega
    }
    // console.log(`value o findex is: ${index}`);
}
for (let i = 1; i <= 10; i++) {
    if(i == 6){
        console.log(`detected ${i}`);
        continue;   // jo condition check hui hai usme loop ka console nhi nhi hoga
    } 
    console.log(`values: ${i}`);
    
}
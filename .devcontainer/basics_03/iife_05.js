(function one (){
    console.log(`DB CONNECTED`);
                                // IIFE [Imidiately Invoked function Expression] 
})();                           // isme poore function ko () iske andar band kr dete hai aur execute krne ke lie only () lgate hai 

( function chai_aur_code(name) {
    console.log(`DB CONNECTED ${name}`);
    
} )("mayank") // code ko immidiately execute krne ke liye IIFE ka use kte hai 
              // aur kabhi kabhi global scope ke polution ki problem hoti hai uske variable i.g.  declaration ke polution ko hatane ke liye iife ka use krte hai
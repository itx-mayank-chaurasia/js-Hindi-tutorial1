// genrate rabndom number
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() *  16)]
    }
    return color;
}
// console.log(randomNumber());
let intervalId;
const startcolorchanger = function(){
    const changebgcolor = function (){
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalId){
        intervalId = setInterval(changebgcolor,1000)
    }
}
const stopcolorchanger = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').
addEventListener('click',startcolorchanger)

document.querySelector('#stop').
addEventListener('click',stopcolorchanger)

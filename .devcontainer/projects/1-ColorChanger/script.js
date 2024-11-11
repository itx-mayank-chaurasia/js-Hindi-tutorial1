const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(buttons);

buttons.forEach(function (button) {
    console.log(button);
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target.id)

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = "black"
            h2.style.color = "black"
        }
        if(e.target.id === 'aqua'){
            body.style.backgroundColor = e.target.id
            h1.style.color = "black"
            h2.style.color = "black"
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
            h1.style.color = "white"
            h2.style.color = "white"
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            h1.style.color = "white"
            h2.style.color = "white"
        }
    })
})


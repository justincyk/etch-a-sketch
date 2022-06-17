let container = document.querySelector(".container");
let message = 16;
let currAmount = document.querySelector('.squareAmount');
currAmount.textContent = message;

for ( let i = 0; i < message*message; ++i )
{
    const square = document.createElement('div');
    square.classList = "square";
    container.appendChild(square);
}
let squareList = document.querySelectorAll(".square");
squareList.forEach( (item) => 
{
    item.addEventListener('mouseover', (e) =>
    {
        e.target.classList.add("changeColor");
        console.log(e.target);
    });
}
)

let btn = document.querySelector(".btn");
btn.addEventListener('click', (e) => {
    console.log(e.target);
    message = Number(prompt("How many square divs do you want on each side?"));
    if( message < 1 || message > 100 )
    {
        while( message < 1 || message > 100){
            message = Number(prompt("Choose a number between 1 and 100 please."));
        }
    }

    let currSquares = document.querySelectorAll(".square");
    for( let j = 0; j < currSquares.length; ++j )
    {
        currSquares[j].remove();
    }
    for ( let i = 0; i < message*message; ++i )
    {
        const square = document.createElement('div');
        square.classList = "square";
        container.appendChild(square);
    }
    let squareList = document.querySelectorAll(".square");
    squareList.forEach( (item) => 
    {
        item.addEventListener('mouseover', (e) =>
        {
            e.target.classList.add("changeColor");
            e.target.style.width = `${960/squareList.length}px`;
            e.target.style.height = `${960/squareList.length}px`;
            console.log(e.target);
        });
    }
    )
    // container.style.width = `${(960/squareList.length)*}`
    currAmount.textContent = message;
})


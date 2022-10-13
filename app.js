console.log("Welcome to tic tac toe");

//start with X player 1
let turn = "X";
let gameTurn = new Audio("media/ting.mp3");
let gameOver = new Audio("media/gameover.mp3");
let isGameOver = false;
let displayTurn = document.getElementsByClassName("info")[0];   //display turn for
let img = document.querySelector('.imgBox').getElementsByTagName('img')[0];

//change the turn of the palyer
const changeTurn = () =>{
    return turn === "X"? "O":"X";
}
//function to check the win of player
const checkWin = () =>{

    let boxtexts = document.getElementsByClassName("boxText")
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [3, 4, 6],
    ];

    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[1]].innerText !== "")){
            displayTurn.innerText = boxtexts[e[0]].innerText + " Wins";
            isGameOver = true;
            gameOver.play();
            img.style.width = "200px";
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    // console.log(element);
    let boxtext = element.querySelector(".boxText");

    element.addEventListener("click", () =>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            
            if(isGameOver == false){
                gameTurn.play();
                displayTurn.innerText = "Turn for " + turn;
            }
        }
    })
})

//Add onclick event to the reset button
let btnReset = document.getElementById("reset");
btnReset.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll(".boxText");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    isGameOver = false;
    turn = "X"
    displayTurn.innerText = "Turn for " + turn;
    img.style.width = "0";

})
console.log("Welcome to my Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn_1 = new Audio("ting.mp3");
let audioTurn = new Audio("sex.mp3");
let gameOver = new Audio("gameover.mp3");
let Turn = "X";
let isgameover=false;
// Function for changing the turn.
const changeTurn = () => {
    Turn=Turn === "X" ? "O" : "X"; // Fix: Update the Turn variable.
};
// Function to check for a win.
const checkWin = () => {
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{ 
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + ' win'
            isgameover=true 
            music.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="15rem"
        }
    })
};
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === ''){
            boxtext.innerText = Turn;
            changeTurn(); // Call the changeTurn function to switch turns.
            audioTurn_1.play();
            checkWin(); // Call the checkWin function to check for a win.
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for = " + Turn;
            } 
        }
    });
});

reset.addEventListener('click',()=>{
    if (!music.paused) {
        music.pause(); // Pause the audio
        music.currentTime = 0; // Reset the audio to the beginning
    }
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText=" ";
    });
    Turn ="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for = " + Turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "0px";
})
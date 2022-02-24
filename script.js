'use strict';
// Selecting elements
let score1 = document.querySelector('#score--0');  
let score2 = document.getElementById('score--1');
let diceE1 = document.querySelector('.dice');

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let currentEl1 = document.getElementById('current--0');
let currentEl2 = document.getElementById('current--1');

let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

//additional variables

let scores, currentscore, activePlayer, playGame;

 //Starting conditions
 const init = function () {
    scores = [0, 0];
    currentscore = 0;
    activePlayer = 0;
    playGame = true;
    
    score1.textContent = 0;
    score2.textContent = 0;
    currentEl1.textContent = 0;
    currentEl2.textContent = 0;
    
    diceE1.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  };
  init();


// Rolling dice functionality
btnRoll.addEventListener('click', function () {

    if (playGame) {
        //btnRoll
        //1.generating random dice roll
        let dice = Math.trunc(Math.random()*6) + 1;
        //console.log(dice);
        //2.display dice
        diceE1.classList.remove('hidden');
        diceE1.src = `dice-${dice}.png`;
        //3 check for rolled one if true switch player
        if (dice !== 1) {
            currentscore += dice;
            //currentEl1.textContent = currentscore;
            document.getElementById(
                `current--${activePlayer}`
              ).textContent = currentScore;
        }
        else {
            // switch to next player

            switchPlayer();
        }
    }
});
const switchPlayer = function () {
document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentscore = 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
};
//btnHold
btnHold.addEventListener('click', function () {
    if (playGame) {
        //1 add current score to active players score
        scores[activePlayer] += currentscore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //2 check if player score>=30
        if (scores[activePlayer] >= 30) {
            //finish game
            playGame = false;
            diceE1.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');


        }
        else {
            //3 switch to next player
            switchPlayer();
        }
    }
});



// btnNew
btnNew.addEventListener('click' , function(){
    score1.textContent=0;
    score2.textContent=0;
    currentEl1.textContent=0;
    currentEl2.textContent=0;
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');

})
function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                            = (player2 + " WINS!");
        }

        else {
            document.querySelector("h1").innerHTML
                            = (player1 + " WINS!");
        }
    }, 2500);
}

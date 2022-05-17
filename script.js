
    // Game code
    
    let playerSelection = null;
    let computerSelection = null ;
    let winCount = 0;
    let lossCount = 0;

    function computerPlay() {       // picks a random number to assign RPS to computerSelection
        let chance = Math.random();
        if (chance < .333) {
                computerSelection = 'rock';
            } else if (.333 <= chance && chance < .666) {
                computerSelection = 'paper';
            } else {
                computerSelection = 'scissors'
            }
    }

    function playRound() {      // gets values for Player and Computer choices and determines winner, gives message and adjusts wins/losses
        computerPlay();  

        if (playerSelection == computerSelection) {
            document.getElementById("results").innerHTML = `You and computer both picked ` + playerSelection + ".<br>Tie game!";
        } else if (playerSelection == 'rock' && computerSelection == 'scissors' || 
            playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
            document.getElementById("results").innerHTML ='Your ' + playerSelection + ` beats computer's ` + computerSelection + '. <br>You Win! Nice!';
            winCount++;
            document.getElementById("humanScore").innerHTML = winCount;
       } else {
            document.getElementById("results").innerHTML = 'Your ' + playerSelection + ` is defeated by computer's ` + computerSelection + '.<br>You Lose! Pathetic.';
            lossCount++;
            document.getElementById("compScore").innerHTML = lossCount;
        } 

        if (winCount === 5) {
            gameOver();
            document.querySelector('#artCenter').appendChild(bmoSad);
            document.getElementById("results").innerHTML = 'Human wins! Computer is sad. Are you happy?';
        } else if (lossCount === 5) {
            gameOver();
            document.querySelector('#artCenter').appendChild(bmoHappy);
            document.getElementById("results").innerHTML = 'Computer wins! This <b>does</b> compute!';
        }
    }
    
    function gameOver() {
        rockButton.removeEventListener("click", rockClick);
        scissorsButton.removeEventListener("click", scissorsClick);
        paperButton.removeEventListener("click", paperClick);
        document.getElementById("newGame").innerHTML = '<p id=newGameButton>New Game?</p>';
        const gameNew = document.getElementById('newGameButton');
        gameNew.addEventListener("click", newGameClick);
    }

    function newGameClick() {
        winCount = 0;
        lossCount = 0;        
        document.getElementById("compScore").innerHTML = lossCount;
        document.getElementById("humanScore").innerHTML = winCount;
        document.getElementById("results").innerHTML = 'Prepare to battle again! First to five wins!'
        rockButton.addEventListener("click", rockClick);
        scissorsButton.addEventListener("click", scissorsClick);
        paperButton.addEventListener("click", paperClick);
        removeImg.removeChild(removeImg.childNodes[0]);
        document.getElementById("newGame").innerHTML = '';
    }

    // UI

    document.getElementById("humanScore").innerHTML = winCount;
    document.getElementById("compScore").innerHTML = lossCount;
    document.getElementById("results").innerHTML = 'Who wants to play video games? Make a choice!<br>First to five points wins.'

    const rockButt = document.getElementById("rockButton");
    rockButt.addEventListener("click", rockClick);
    function rockClick() {
        document.getElementById("results").innerHTML = "rock clicked";
        playerSelection='rock';
        playRound();
        rockButton.classList.add('clicked');
    }

    const paperButt = document.getElementById("paperButton");
    paperButt.addEventListener("click", paperClick);
    function paperClick() {
        document.getElementById("results").innerHTML = "paper clicked";
        playerSelection='paper';
        playRound();
        paperButton.classList.add('clicked');
    } 

    const scissorsButt = document.getElementById("scissorsButton");
    scissorsButt.addEventListener("click", scissorsClick);
    function scissorsClick() {
        document.getElementById("results").innerHTML = "scissors clicked";
        playerSelection='scissors';
        playRound();
        scissorsButton.classList.add('clicked');
    }
   
    const bmoHappy = document.createElement('img');
    bmoHappy.src = 'images/bmohappy.gif';

    const bmoSad = document.createElement('img');
    bmoSad.src = 'images/bmosad.gif';

    const removeImg = document.getElementById('artCenter');
   
    const buttons = document.querySelectorAll('.selector');
    buttons.forEach (selector => selector.addEventListener('transitionend', removeTransition));

    function removeTransition(e) {
        this.classList.remove('clicked');
    }


function computerPlay(){
    const random = (Math.floor(Math.random() * 3))
       if(random === 0) {
           return 'rock'
       } else if(random === 1) {
           return 'paper'
       } else {
           return 'scissors'
       }
   }

   function playingRules(playerSelection, computerSelection){
    let winner = `You win! ${playerSelection} beats ${computerSelection}!`
    let loser = `You lose! ${computerSelection} beats ${playerSelection}!`
    let tie = 'It is a tie!'

        if(playerSelection === computerSelection) {
            return tie
        }
        if(playerSelection === 'rock' && computerSelection === 'scissors'){
            return winner
        } else if(playerSelection ==='scissors' && computerSelection === 'paper') {
            return winner
        } else if(playerSelection ==='paper' && computerSelection === 'rock') {
            return winner
        } else {
            return loser
        }
    }

function mainGame () {
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i < 5; i++){
        let playerSelection = prompt("Type 'rock' 'scissors' or 'paper'").trim().toLowerCase();
        const playerSelected = playerSelection.toLowerCase();
        const computerSelected = computerPlay()
        if (playerSelected == 'rock' || playerSelected == 'paper' || playerSelected == 'scissors'){
            if(playingRules(playerSelected, computerSelected) == 'It is a tie!'){
                i--
                console.log(`Player Score: ${playerScore}`)
                console.log(`Computer Score: ${computerScore}`)
            } else if(playingRules(playerSelected, computerSelected) == `You win! ${playerSelected} beats ${computerSelected}!`){
                playerScore++
                console.log(`Player Score: ${playerScore}`)
                console.log(`Computer Score: ${computerScore}`)
            } else {
                computerScore++
                console.log(`Player Score: ${playerScore}`)
                console.log(`Computer Score: ${computerScore}`)        
            }
            console.log(playingRules(playerSelected, computerSelected))
        } else {
            alert("Error - Please type in 'rock' 'scissors' or 'paper'")
            i--
        }
    }
    
    if(playerScore > computerScore){
        console.log(`*Congrats you win!*`)
        console.log(`Final Score: Player: ${playerScore} Computer: ${computerScore}`)
    } else if(playerScore < computerScore){
        console.log(`*You lose! Try next time!*`)
        console.log(`Final Score: Player: ${playerScore} Computer: ${computerScore}`)
    }
}

mainGame();
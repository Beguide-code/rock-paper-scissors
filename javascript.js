function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return 'rock';
    }
    else if(randomNumber === 1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

const getHumanChoice = () => prompt('Enter rock, paper or scissors');

let humanScore = 0;
let computerScore = 0;
        
function playRound(humanChoice,computerChoice){
    
        if(humanChoice === 'rock' && computerChoice ==='paper'){
            console.log('You lose! paper beats rock');
            computerScore++;
        }
        else if(humanChoice === 'paper' && computerChoice ==='rock'){
            console.log('You win! paper beats rock');
            humanScore++;
        }
        else if(humanChoice === 'rock' &&  computerChoice ==='scissors'){
            console.log('You win rock beats scissors');
            humanScore++;
        }
        else if(humanChoice === 'scissors' &&  computerChoice ==='rock'){
            console.log('You lose! rock beats scissors');
            computerScore++;
        }
        else if(humanChoice === 'paper' &&  computerChoice ==='scissors'){
            console.log('You lose! scissors beats paper');
            computerScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice ==='paper'){
            console.log('You win! scissors beats paper');
            humanScore++;
        }
        else
            console.log('Equal guessing');

    }


    for(let i=0;i<5;i++){
            let humanSelection = getHumanChoice().toLowerCase();
            let computerSelection = getComputerChoice();

            playRound(humanSelection,computerSelection);
    }

    if(humanScore>computerScore)
        console.log('Congratulations! you won the game G');
    else if(humanScore<computerScore)
        console.log('Sorry! you lose. Try again next time');
    else
        console.log('Not bad, you neither won nor lose');
    


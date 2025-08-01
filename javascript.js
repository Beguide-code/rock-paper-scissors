humanScore = 0;
computerScore = 0;

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

function playRound(humanChoice,computerChoice){
    
    if(humanSelection === 'rock' && computerSelection ==='paper'){
        console.log('You lose! paper beats rock');
        computerScore++;
    }
    else if(humanSelection === 'paper' && computerSelection ==='rock'){
        console.log('You win! paper beats rock');
        humanScore++;
    }
    else if(humanSelection === 'rock' && computerSelection ==='scissors'){
        console.log('You win rock beats scissors');
        humanScore++;
    }
    else if(humanSelection === 'scissors' && computerSelection ==='rock'){
        console.log('You lose! rock beats scissors');
        computerScore++;
    }
    else if(humanSelection === 'paper' && computerSelection ==='scissors'){
        console.log('You lose! scissors beats paper');
        computerScore++;
    }
    else if(humanSelection === 'scissors' && computerSelection ==='paper'){
        console.log('You win! scissors beats paper');
        humanScore++;
    }
    else
        console.log('Equal guessing');

}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);


function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
    console.log('rock');
    }
    else if(randomNumber === 1){
        console.log('paper');
    }
    else{
        console.log('scissors');
    }
}

getComputerChoice();

const getHumanChoice = () => prompt('Enter rock, paper or scissors');

const userChoice = getHumanChoice();
console.log(userChoice);


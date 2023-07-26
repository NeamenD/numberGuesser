let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// the purpose of this function is to be called at the start of each return randome int between 0 to 9
const generateTarget = () =>{
    const num_generater = Math.floor(Math.random() * 10);
    return(num_generater);

    
}


// console.log(generateTarget());

const compareGuesses = (human,computer,target_number) =>{
    const target_numberSubtractHumannum = Math.abs(target_number-human)
    // return(target_numberSubtractHumannum)
    const target_numberSubtractComputernum = Math.abs(target_number-computer)
    // return(target_numberSubtractComputernum)

    if (target_numberSubtractHumannum <= target_numberSubtractComputernum){
        return true
    }

    
    else{
        return false
    }


}
// console.log(compareGuesses(1,8,8));


const updateScore = winner =>{
    if (winner === 'human'){
        humanScore++;

    }
    else if (winner === 'computer'){
        computerScore++;
    }
    
}

const advanceRound = () =>
    currentRoundNumber ++;

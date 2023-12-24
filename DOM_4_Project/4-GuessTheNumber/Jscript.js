let randomNumber = parseInt(Math.random()*100+1);
const submit= document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //check number is between 1-100
    if(isNaN(guess)){
        alert('please enter the valid number')
    }else if(guess<1){
        alert('Please enter the number greater than 1')
    }else if(guess>100){
        alert('Please enter the number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //check if it is lower or higher than number
    if(guess===randomNumber){
        displayMessage(`You Guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is tooo Low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is tooo High`)
    }
}

function displayMessage(messages){
    //
    lowOrHi.innerHTML=`<h2>${messages}</h2>`
}

function displayGuess(guess){
    //
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML=`${11-numGuess} `
}

function newGame(){
    //
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML =''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true
   })
}

function endGame(){
    //
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame=false
    newGame()
}
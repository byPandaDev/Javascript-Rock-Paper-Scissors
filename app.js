const points = document.getElementById('points')
const winTitle = document.getElementById('wins')
const userPickTxt = document.getElementById('userPick')
const compPickTxt = document.getElementById('compPick')


let userPoints = compPoints = 0
let userPick, compPick

var choices = ['Rock', 'Paper', 'Scissors']

function setMove(pick) {
    // Pick random choice for Computer
    compPick = choices[Math.floor(Math.random() * choices.length)]

    // Define the Choice on screen
    userPickTxt.textContent = `You Picked: ${pick}`
    compPickTxt.textContent = `Computer Picked: ${compPick}`

    if(pick === compPick) {
        winTitle.textContent = 'Both picked the same.'
        return
    }

    switch(pick) {
        case 'Rock': 
            if(compPick === 'Scissors') {
                userPoints += 1
                winTitle.textContent = 'Rock covers Scissors. You win!'
            }
            if(compPick === 'Paper') {
                compPoints += 1
                winTitle.textContent = 'Paper covers Rock. You lose!'
            }
            break
        case 'Paper':
            if(compPick === 'Scissors') {
                compPoints += 1
                winTitle.textContent = 'Scissors covers Paper. You lose!'
            }
            if(compPick === 'Rock') {
                userPoints += 1
                winTitle.textContent = 'Paper covers Rock. You win!'
            }
            break
        case 'Scissors':
            if(compPick === 'Rock') {
                compPoints += 1
                winTitle.textContent = 'Rock covers Scissors. You lose!'
            }
            if(compPick === 'Paper') {
                userPoints += 1
                winTitle.textContent = 'Scissors covers Paper. You win!'
            }
            break
    }

    points.textContent = `${userPoints}:${compPoints}`
    
}

/* 
Made with ♡ by PandaDev
Github: https://github.com/xPandaDev
Website: https://codewithpanda.com
*/
// refatorar o código
function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1
}

let randomNumber1 = generateRandomNumber()
let randomNumber2 = generateRandomNumber()

randomImageSource2 = 'images/dice' + randomNumber2 + '.png'

document.querySelectorAll('img')[0].setAttribute('src', 'images/' + 'dice' + randomNumber1 + '.png')

document.querySelectorAll('img')[1].setAttribute('src', 'images/' + 'dice' + randomNumber2 + '.png')

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 1 ganhou!'
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 2 ganhou!'
} else {
    document.querySelector('h1').innerHTML = 'Empate'
}
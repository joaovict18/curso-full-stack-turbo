const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

btn.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * colors.length) + 1
    const mainColor = document.querySelector('#main-color')

    mainColor.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.random()
}
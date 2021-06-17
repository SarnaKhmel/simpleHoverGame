const board = document.querySelector('#board')
const colors = ['#7B241C', '#633974', '#1A5276', '#117864', '#F4D03F', '#FEFE00', '#FE0000']
const SQUARES_NUMBER = 1024

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // square.addEventListener('mouseover', () => setColor(square))
    // square.addEventListener('mouseleave', () => removeColor(square))

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)

}

// function setColor(element) {
function setColor(event) {
    const element = event.target
    const color = getColor()
    element.style.background = color;
    element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
}

// function removeColor(element) {
function removeColor(event) {
    const element = event.target
    element.style.background = 'gray';
    element.style.boxShadow = ` 0 0 2px #000`

}

function getColor(element) {
   return colors[Math.floor(Math.random() * colors.length)]
}
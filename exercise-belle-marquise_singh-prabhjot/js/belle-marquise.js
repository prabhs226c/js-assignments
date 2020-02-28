'use strict'

const COMMA = ', '
const BOARD = [
    'beautiful Marquise',
    'your beautiful eyes',
    'make me die',
    'of love'
]

document.write('<ul>');
document.write(RandomiseBoard(BOARD));
document.write(RandomiseBoard(BOARD));
document.write(RandomiseBoard(BOARD));
document.write(RandomiseBoard(BOARD));


function RandomiseBoard(array) {
    let numbers = []
    let newArray = []

    for (let k = 0; k <= array.length; k++) {
        numbers[k] = k
    }

    for (let i = 0; i < array.length; i++) {
        let randomInt = getRandomInt(numbers.length - 1)
        newArray[i] = array[numbers[randomInt]]
        numbers.splice(randomInt, 1)
    }

    return ('<li>' + ' ' + newArray[0] + '' + COMMA + ' ' + newArray[1] + COMMA + ' ' + newArray[2] + COMMA + ' ' + newArray[3] + '.</li>').toString()
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
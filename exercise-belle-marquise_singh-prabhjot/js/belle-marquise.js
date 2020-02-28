'use strict'

const COMMA = ', '
const BOARD = [
    'beautiful Marquise',
    'your beautiful eyes',
    'make me die',
    'of love'
]


document.write('<ul>');
document.write('<li>',BOARD[0],COMMA,BOARD[1],COMMA,BOARD[2],COMMA,BOARD[3],'.</li>');
document.write('<li>',BOARD[1],COMMA,BOARD[0],COMMA,BOARD[3],COMMA,BOARD[2],'.</li>');
document.write('<li>',BOARD[3],COMMA,BOARD[2],COMMA,BOARD[0],COMMA,BOARD[1],'.</li>');
document.write('<li>',BOARD[2],COMMA,BOARD[0],COMMA,BOARD[3],COMMA,BOARD[1],'.</li>');
document.write('<ul>');

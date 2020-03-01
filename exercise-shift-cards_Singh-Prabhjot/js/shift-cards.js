'use strict'

const cardStack = document.getElementById('cards')
const cards = cardStack.getElementsByTagName('img')

function shiftLeft()
{

    
    let extraCard = cards[0].getAttribute('src')
    
    for(let i = 0;i<cards.length-1;i++)
    {
        cards[i].setAttribute('src',cards[i+1].getAttribute('src'))
    }
    cards[cards.length-1].setAttribute('src',extraCard)

}

function shiftRight()
{
    let extraCard = cards[cards.length-1].getAttribute('src')
    
    for(let i = cards.length-1;i>0;i--)
    {
        cards[i].setAttribute('src',cards[i-1].getAttribute('src'))
    }
    cards[0].setAttribute('src',extraCard)

}
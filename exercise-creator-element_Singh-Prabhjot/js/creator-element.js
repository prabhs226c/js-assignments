'use strict'

const outputDiv = document.getElementById('output')

function createWithInnerHTML(){
    
    outputDiv.innerHTML = outputDiv.innerHTML+"<h1 class=\"inner-html\">hi</h1>"
}

function createWithCreateElement()
{
    let newElemment = document.createElement('input')
    newElemment.setAttribute('type','button')
    newElemment.setAttribute('class','create-element')
    newElemment.setAttribute('value','Clicky')
    outputDiv.appendChild(newElemment)
}
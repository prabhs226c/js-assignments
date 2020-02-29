'use strict'

const outputDiv = document.getElementById('output')


function createWithInnerHTML(){
    
    let elementType = document.getElementById('elementType').value
    let elementContent = document.getElementById('elementContent').value

    if(elementContent.trim()==="")
    {
        alert('Please Enter Some Value')
    }else{
        outputDiv.innerHTML = outputDiv.innerHTML+"<"+elementType+" class=\"inner-html\">"+elementContent+"</h1>"
    }
}

function createWithCreateElement()
{
    let elementType = document.getElementById('elementType').value
    let elementContent = document.getElementById('elementContent').value
    if(elementContent.trim()==="")
    {
        alert('Please Enter Some Value')
    }else{
        let newElemment = document.createElement(elementType)
        newElemment.setAttribute('class','create-element')
        newElemment.innerHTML = elementContent
        outputDiv.appendChild(newElemment)
    }
}
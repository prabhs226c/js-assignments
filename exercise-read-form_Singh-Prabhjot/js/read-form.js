'use strict'

function readForm()
{
    const LAST_NAME = document.getElementById('lastName').value.trim()
    const FIRST_NAME = document.getElementById('firstName').value.trim()

    if( LAST_NAME === "" || FIRST_NAME === "" )
    {
        alert('One or Both Fields Empty')
    }else
    {
        document.getElementById('output').innerHTML = "<h2>"+LAST_NAME+"</h2><h2>"+FIRST_NAME+"</h2>"
    }
    
}
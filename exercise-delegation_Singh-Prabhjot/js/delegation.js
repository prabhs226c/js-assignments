'use strict'

document.addEventListener('DOMContentLoaded',function(){
    
    const listContainer = document.getElementById('listContainer')
    const LIST_SIZE = 10
    const output = document.getElementById('output')

    for(let i = 0; i < LIST_SIZE; i++)
    {
        let node = document.createElement('li')
        node.appendChild(document.createTextNode('Product Number: '+i))
        node.setAttribute('id','product_no_'+i)
        node.setAttribute('class','list-item')
        listContainer.appendChild(node)
    }

    for(let i = 0; i < LIST_SIZE; i++)
   {
       //adding event listeners to dynamically created elements
    document.getElementById('product_no_'+i).addEventListener('click',showDetails)
   }
    
   function showDetails()
   {
       output.innerHTML = this.innerHTML+" (ID = "+this.getAttribute('id')+")"
   }
    
})
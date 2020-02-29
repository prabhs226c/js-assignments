'use strict' 

const list  = document.getElementById('list')

function addNewLiElement()
{
    const textBox = document.getElementById('textBox');

    let newText = textBox.value.trim()
    
    if(newText === null || newText ==="")
    {
        alert('textbox is empty')
        textBox.value=""
    }else{
        let newTask = document.createElement('li')
        newTask.innerText = newText
        newTask.setAttribute('class','c1')
        

        list.appendChild(newTask)
        textBox.value = "";
    }    
}

function deleteLastLiElement()
{
    let taskList = list.getElementsByTagName('li')

    let lastItem = taskList.length-1

    if(lastItem < 0)
    {
        alert('list is already empty')
    }else{
        taskList[lastItem].remove(lastItem) 
    }


}
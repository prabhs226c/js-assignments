'use strict'
document.addEventListener('DOMContentLoaded',function(){
    
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("element", ev.target.id);
  }
  
  function drop(ev) {
    let data = ev.dataTransfer.getData("element");
    ev.target.appendChild(document.getElementById(data));
  }

  const dropArea = document.getElementById('dropArea')
  const container = document.getElementById('container')
  const draggables = container.getElementsByTagName('div')

  for(let i=0; i < draggables.length; i++)
  {
      if(draggables[i].getAttribute('draggable') === "true")
      {
          draggables[i].setAttribute('id','draggable_'+i)
        draggables[i].addEventListener('dragstart',drag)
      }
  }

  dropArea.addEventListener('drop',drop)
  dropArea.addEventListener('dragover',allowDrop)
})
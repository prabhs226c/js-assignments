'use strict'
document.addEventListener('DOMContentLoaded',function(){
    
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
      let x = ev.target
    ev.dataTransfer.setData("Text", ev.target.id);
  }
  
  function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
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
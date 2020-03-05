'use strict'

document.getElementById('numberInput').addEventListener('change',function(){
    const imageSet = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg']
    const number = this.value
    const image = document.getElementById('numberDiv').getElementsByTagName('img')[0]
   
    image.setAttribute('src','image/'+imageSet[number])
})
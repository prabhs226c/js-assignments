'use strict'
document.addEventListener('DOMContentLoaded',function(){
    const frame = document.getElementById('frameImage')
    frame.setAttribute('frame-state',0);
    
    const seekBar = document.getElementById('frameRange')

    const playButton = document.getElementById('playButton')
    const stopButton = document.getElementById('stopButton')
    
    const frameList = ['img0001-min.jpg','img0002-min.jpg','img0003-min.jpg','img0004-min.jpg','img0005-min.jpg','img0006-min.jpg'
    ,'img0007-min.jpg','img0008-min.jpg','img0009-min.jpg','img0010-min.jpg','img0011-min.jpg','img0012-min.jpg','img0013-min.jpg'
    ,'img0014-min.jpg','img0015-min.jpg','img0016-min.jpg','img0017-min.jpg','img0018-min.jpg','img0019-min.jpg','img0020-min.jpg'
    ,'img0021-min.jpg','img0022-min.jpg','img0023-min.jpg','img0024-min.jpg','img0025-min.jpg','img0026-min.jpg','img0027-min.jpg'
    ,'img0028-min.jpg','img0029-min.jpg','img0030-min.jpg','img0031-min.jpg','img0032-min.jpg','img0033-min.jpg','img0034-min.jpg'
    ,'img0035-min.jpg','img0036-min.jpg']
    
    
    playButton.addEventListener('click',function(){changeState(1)})    
    stopButton.addEventListener('click',function(){changeState(0)})
    
    seekBar.addEventListener('input',function(){
      
        changeFrame(true)
    })
    
    function changeState(state)
    {
        frame.setAttribute('frame-state',state)
        
    }
    
    setInterval(() =>  changeFrame() ,100)

    function changeFrame(manual=false){
        
        let frameNumber = seekBar.value
        
        if(frame.getAttribute('frame-state') == 1 || manual === true)
        {
            frame.setAttribute('src','image/'+frameList[frameNumber-1])
            
            frameNumber++
            
            if(frameNumber === 37)
            {
                frameNumber = 1
            }
            seekBar.value = frameNumber
            
        }
    }
})
'use strict';
let printHR = function(){document.writeln('<hr>')}
let size = 6;
drawA(size);
printHR();

drawB(size);
printHR();

drawC(size);
printHR();

drawD(size);
printHR();

drawE(size);
printHR();

size = 7
drawNumberA(size);
printHR();

drawNumberB(size);
printHR();

drawNumberC(size);
printHR();

drawNumberD(size);
printHR();



function drawA(maxIndex)
{
    for(let i=0;i<maxIndex;i++)
    {
        for(let j=0; j < maxIndex; j++)
        {
            if((i == 0 || i == maxIndex-1) )
            {
               if(j!= maxIndex-1)
               {
                document.writeln('#')
               }else{
                document.writeln('#<br>')
               }
            }else{
                if(j==0)
                {
                    document.writeln('#')
                }else  if(j== maxIndex-1)
                {
                    document.writeln('#</br>')
                }else{
                    document.writeln('&nbsp;&nbsp;')
                }
            }
        }
    }
}

function drawB(maxIndex)
{
    for(let i=0;i<maxIndex;i++)
    {
        for(let j=0; j < maxIndex; j++)
        {
            if((i == 0 || i == maxIndex-1) )
            {
               if(j!= maxIndex-1)
               {
                document.writeln('#')
               }else{
                document.writeln('#<br>')
               }
            }else{
                if(j==i)
                {
                    document.writeln('#')
                }else  if(j== maxIndex-1)
                {
                    document.writeln('&nbsp;&nbsp;</br>')
                }else{
                    document.writeln('&nbsp;&nbsp;')
                }
            }
        }
    }
}


function drawC(maxIndex)
{
    for(let i=0;i<maxIndex;i++)
    {
        for(let j=0; j < maxIndex; j++)
        {
            if((i == 0 || i == maxIndex-1) )
            {
               if(j!= maxIndex-1)
               {
                document.writeln('#')
               }else{
                document.writeln('#<br>')
               }
            }else{
                if(j==(maxIndex-1)-i)
                {
                    document.writeln('#')
                }else  if(j== maxIndex-1)
                {
                    document.writeln('&nbsp;&nbsp;</br>')
                }else{
                    document.writeln('&nbsp;&nbsp;')
                }
            }
        }
    }
}

function drawD(maxIndex)
{
    for(let i=0;i<maxIndex;i++)
    {
        for(let j=0; j < maxIndex; j++)
        {
            if((i == 0 || i == maxIndex-1) )
            {
               if(j!= maxIndex-1)
               {
                document.writeln('#')
               }else{
                document.writeln('#<br>')
               }
            }else{
                if((j==(maxIndex-1)-i) || j==i )
                {
                    document.writeln('#')
                }else  if(j== maxIndex-1)
                {
                    document.writeln('&nbsp;&nbsp;</br>')
                }else{
                    document.writeln('&nbsp;&nbsp;')
                }
            }
        }
    }
}

function drawE(maxIndex)
{
    for(let i=0;i<maxIndex;i++)
    {
        for(let j=0; j < maxIndex; j++)
        {
            if((i == 0 || i == maxIndex-1) )
            {
               if(j!= maxIndex-1)
               {
                document.writeln('#')
               }else{
                document.writeln('#<br>')
               }
            }else{
                if((j==(maxIndex-1)-i) || j==i || j==0)
                {
                    document.writeln('#')
                }else  if(j== maxIndex-1)
                {
                    document.writeln('#</br>')
                }else{
                    document.writeln('&nbsp;&nbsp;')
                }
            }
        }
    }
}

function drawNumberA(maxIndex)
{
    for(let i=1;i<=maxIndex+1;i++)
    {
        for(let j=1;j<=i;j++)
        {
            document.writeln(j)
            if(j==i)
            document.writeln("<br>")
        }
    }
}

function drawNumberB(maxIndex)
{
    for(let i=1;i<=maxIndex+1;i++)
    {
        let k=0;
        for( k=1; k<i;k++)
            {
                document.writeln('&nbsp;&nbsp;')
            }
        for(let j=1;j<=maxIndex-k+2;j++)
        {
            document.writeln(j)
            if(j == (maxIndex-k+2))
            {
                document.writeln("<br>")
            }
        }
    }
}

function drawNumberC(maxIndex)
{
    for(let i=1;i<=maxIndex+1;i++)
    {
        
        for(let k=maxIndex+1; k >= 1;k--)
            {
                if(k > i)
                {
                    document.writeln("&nbsp;&nbsp;")
                }else{
                        document.writeln(k);
                        if(k===1)
                        {
                            document.writeln('<br>')
                        }
                    
                }
            }
       
    }
}

function drawNumberD(maxIndex){
    for(let i=0;i<=maxIndex;i++)
    {
        for(let k=maxIndex-i+1;k>=1;k--)
        {
            document.writeln(k);
            if(k===1)
            document.writeln("<br>")
        }
    }
}
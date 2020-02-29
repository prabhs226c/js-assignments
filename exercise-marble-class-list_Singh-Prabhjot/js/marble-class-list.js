'use strict'


let marble = document.getElementsByClassName('marble')

const classSet = ['marble rounded',
'marble green size_x',
'marble  blue size_xx incline',
'marble  orange',
'marble rounded size_xx orange',
'marble rounded size_xxx purple',
'marble rounded size_xxx blue',
'marble rounded size_xxx yellow',
'marble rounded green offset',
]


function throwMarbles()
{
    let numbers = []
 

    for (let k = 0; k <= classSet.length; k++) {
        numbers[k] = k
    }
    
    for(let i = 0;i < marble.length; i++)
    {
        let randomInt = getRandomInt(numbers.length - 1)
        let set = classSet[numbers[randomInt]];
        marble[i].setAttribute('class',set)
        numbers.splice(randomInt, 1)
    }
}

throwMarbles()

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
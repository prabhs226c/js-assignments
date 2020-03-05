'use strict'

document.addEventListener('DOMContentLoaded',function(){
    
const weekEn = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
const weekFr = ['dimanche ','lundi','mardi','mercredi ','jeudi','vendredi','samedi']

const dayNumber = document.getElementById('dayNumber')
const language = document.getElementById('language')
const dayNameLabel = document.querySelector('label[for="dayNumber"]')

changeDayName()

dayNumber.addEventListener('input',function()
{
    changeDayName()
})


language.addEventListener('change',function(){
    changeDayName()    
})

function changeDayName()
{
    dayNameLabel.innerHTML =  language.checked ?  weekFr[dayNumber.value] :  weekEn[dayNumber.value] 
}

})

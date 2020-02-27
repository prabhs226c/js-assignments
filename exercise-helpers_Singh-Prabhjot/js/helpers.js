'use strict';

const numbers = [45,33,9,67,22];
console.log('Numbers are', numbers)
console.log('Get First Number:' , getFirst(numbers));
console.log('Get Last Number:' , getLast(numbers));
console.log('Average is' , getAverage(numbers));
console.log('Minimum is' , getMinimum(numbers));
console.log('Maximum is' , getMaximum(numbers));
console.log('Total is' , getTotal(numbers));

function getFirst(array)
{
    return array[0];
}

function getLast(array)
{
    return array[array.length-1];
}

function getAverage(array)
{
    return getTotal(array)/array.length
}

function getMinimum(array)
{
    let minimum = array[0]

    for(let i=0;i < array.length;i++)
    {
        if(minimum > array[i])
            minimum = array[i]
    }
    return minimum
}


function getMaximum(array)
{
    let maximum = array[0]

    for(let i=0;i < array.length;i++)
    {
        if(maximum < array[i])
            maximum = array[i]
    }
    return maximum
}

function getTotal(array)
{
    let sum = 0
    for(let i=0;i< array.length;i++)
    {
        sum += array[i];
    }
    return sum
}
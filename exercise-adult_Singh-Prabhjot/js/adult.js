'use strict'

// Age to be considered an adult
const MAJOR = 18

// Four groups of ages
const AGES = [
    [25, 39, 51, 22, 15, 44],
    [25, 39, 51, 22, 55, 44],
    [25],
    [15]
]

AGES.forEach(function (group, index) {
    let counter = 0
    let allAdults = true
    group.forEach(function (member, memberIndex) {
        allAdults = (member < MAJOR || allAdults === false) ? false : true;
    });

    let row = document.createElement("tr");
    let cell1 = document.createElement('td')
    let cell2 = document.createElement('td')

    let cell1Text = document.createTextNode("Group " + index);
    let cell2Text = document.createTextNode(allAdults ? "are all Adults" : "are not all Adults");

    row.appendChild(cell1);
    row.appendChild(cell2);

    cell1.appendChild(cell1Text)
    cell2.appendChild(cell2Text)
    let table = document.getElementsByTagName('tbody')
    table[1].appendChild(row)


});
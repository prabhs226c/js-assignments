'use strict'

// Reference ISO
// http://www.lingoes.net/en/translator/langcode.htm

function show (description, result) {
document.writeln('<tr><td>' + description + '</td><td>' + result + '</td></tr>')
}
let d = new Date();

let month = ['January','February','March','April','May','June','July','August','September','October','November','December']

let missionAppolo = new Date();
missionAppolo.setUTCFullYear(1969,6,20)
missionAppolo.setUTCHours(20,17,40)
show(
'Todays date, automatically translated',
    (d.toString())
)

show(
'Number of ms elapsed since 01/01/1970 at 00:00:00',
d.getTime()
)

show(
'The current month\'s name',
month[d.getMonth()]
)

show(
'Localization in Arabic of today\'s date',
d.toLocaleDateString('ar-SA',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
)

show(
'Offset date of today in minutes with UTC',
d.getTimezoneOffset()
)

show(
"Mission Apollo11: Date of landing on the Moon July 20, 1969 at 20 h 17 min 40 s UTC",
missionAppolo.toString()
)
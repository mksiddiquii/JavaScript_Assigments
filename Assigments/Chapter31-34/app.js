document.writeln(`<h1> Chapter 31 to 34 Assigments</h1>`)
 /* Task No.01 */

document.writeln(`<h3> Task No.1 </h3>`)

var now = new Date()
document.writeln(`Courrent Date and Time : ${now}`)


 /* Task No.02 */

document.writeln(`<h3> Task No.2 </h3>`)
 

var months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var current_Month = new Date().getMonth()
document.writeln(`Courrent Month  : ${months[current_Month]}`)

 /* Task No.03 */

document.writeln(`<h3> Task No.3 </h3>`)
var days = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var current_day = new Date().getDay()
document.writeln(`Courrent Month  : ${days[current_day]}`)

 /* Task No.04 */

document.writeln(`<h3> Task No.4 </h3>`)
var days = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var current_day = new Date().getDay()
if (days[current_day] === days[6] || days[current_day] === days[0]) {
   document.writeln(`Its Fun Day`) 
} else {document.writeln("Today is Not Saturday or Sunday")}


 /* Task No.05 */

document.writeln(`<h3> Task No.5 </h3>`)

var today = new Date().getDate()


if (today < 16) {
    document.writeln("First fifteen days of the month");
} else {
    document.writeln("Last days of the month");
}

 /* Task No.06 */

document.writeln(`<h3> Task No.6 </h3>`)

var now = new Date()
var millliseconds = now.getTime();
document.writeln(`Courrent Date and Time : ${now} <br>`)
document.writeln(`Elapsed millliseconds since January 1, 1970:  ${Math.floor(millliseconds)} <br>` );
document.writeln(`Elapsed minute since January 1, 1970:  ${Math.floor(millliseconds)/(1000*60)}` );


 /* Task No.07 */

document.writeln(`<h3> Task No.7 </h3>`)

var today_time = new Date().getFullYear()


if (today < 12) {
    document.writeln("Its AM");
} else {
    document.writeln("Its PM");
}

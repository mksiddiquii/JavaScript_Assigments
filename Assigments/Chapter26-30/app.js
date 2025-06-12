document.writeln(`<h1> Chapter 26 to 30 Assigments</h1>`)
 /* Task No.01 */

document.writeln(`<h3> Task No.1 </h3>`)

/* var num = parseFloat(prompt("Enter any positive integer Number:"))

document.writeln(`Number : ${num} <br>`,)
document.writeln(`Round off Value: ${Math.round(num)} <br>`)
document.writeln(`Floor Value: ${Math.floor(num)} <br>`)
document.writeln(`Floor Ceil: ${Math.ceil(num)} <br>`) */

/* Task No.02 */

document.writeln(`<h3> Task No.2 </h3>`)

/* var num1 = parseFloat(prompt("Enter any Negative  integer Number:"))

document.writeln(`Number : ${num1} <br>`,)
document.writeln(`Round off Value: ${Math.round(num1)} <br>`)
document.writeln(`Floor Value: ${Math.floor(num1)} <br>`)
document.writeln(`Floor Ceil: ${Math.ceil(num1)} <br>`) */

/* Task No.03 */

document.writeln(`<h3> Task No.3 </h3>`)

/* var num2 = parseInt(prompt("Enter a number"))
document.writeln(`The Absolute value of ${num2} is ${Math.abs(num2)}`) */


/* Task No.04 */
document.writeln(`<h3> Task No.4 </h3>`)


for (var i = 1 ; i <=6 ; i++){
var dice = Math.floor(Math.random() * 6)+1 
document.writeln(`Random Dice value:  ${dice} <br>`)
}

/* Task No.05 */
document.writeln(`<h3> Task No.5 </h3>`)

var matchFound = false;
for (var i = 1 ; i <=2 ; i++){
var coin = Math.floor(Math.random() * 2)+1 
if (coin == 2) {
    var matchFound = true;
    document.writeln(`Random Value value:  Head <br>`)
    break
} 
}if (matchFound === false) {
 document.writeln(`Random Value value:  Tail <br>`);
 }


 /* Task No.06 */
 document.writeln(`<h3> Task No.6 </h3>`)


for (var i = 1 ; i <=10 ; i++){
var r_num = Math.floor(Math.random() * 100)+1 
document.writeln(`Random value:  ${r_num} <br>`)
}

/* Task No.07 */
document.writeln(`<h3> Task No.7 </h3>`)

/* var num3 = parseFloat(prompt("Enter Your Weight:"))
document.writeln(`Your Weight is  : ${num3}KGs <br>`,) */


/* Task No.08 */
document.writeln(`<h3> Task No.8 </h3>`)


var coin = Math.floor(Math.random() * 10)+1 



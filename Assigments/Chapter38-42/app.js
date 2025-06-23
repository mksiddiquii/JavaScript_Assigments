document.writeln(`<h1> Chapter 38 to 42 Assigments</h1>`)
 /* Task No.01 */

document.writeln(`<h3> Task No.1 </h3>`)

function power(a,b) {
    return a**b  
}
document.writeln(power(2,3))

 /* Task No.02 */

document.writeln(`<h3> Task No.2 </h3>`)

function leap_year(year) {
    if (year % 4 === 0 ) {
        return "leap Year"
    } else {
        return "Not leap year "
    }
    
}
document.writeln(leap_year(2025))

 /* Task No.03 */

document.writeln(`<h3> Task No.3 </h3>`)

function triangle(a,b,c) {
    return (a+b+c) / 2
}
function area_calculate(a,b,c) {
    var s = triangle(a,b,c)
    var area = (s*(s-a)*(s-b)*(s-c))
    return area
}
// var a = +prompt("Enter side a:")
// var b = +prompt("Enter side b:")
// var c = +prompt("Enter side c:")
document.writeln(area_calculate(a,b,c))

/* Task No.04 */

document.writeln(`<h3> Task No.4</h3>`)

function name(params) {
    
}
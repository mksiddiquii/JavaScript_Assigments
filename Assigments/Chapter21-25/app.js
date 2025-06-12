document.writeln(`<h1> Chapter 21 to 25 Assigments</h1>`)
 /* Task No.01 */

document.writeln(`<h3> Task No.1 </h3>`)


first_name = prompt("what is you First name?");
last_name = prompt("what is you Last name?");
full_name = first_name +" "+ last_name ;
document.writeln("welcome the coding world Mr."+full_name)

/* Task No.02 */

document.writeln(`<h3> Task No.2 </h3>`)

var fav_phone = prompt("What is your favorite mobile phone model:")
document.writeln("My Favorite phone is : " + fav_phone ,"<br>")
document.writeln("length of String is:"+fav_phone.length)

/* Task No.03 */

document.writeln(`<h3> Task No.3 </h3>`)

var country = "Pakistani"
document.writeln("String: "+ country,"<br>")
document.writeln("At 7th Index word is : "+country[7] ,"<br>")
document.writeln("Index of n is: "+country.indexOf("n"))

/* Task No.04 */

document.writeln(`<h3> Task No.4 </h3>`)

var greeting = "Hello World "
document.writeln("String: "+ greeting,"<br>")
document.writeln("Last Index of l is: "+greeting.lastIndexOf("l"))

/* Task No.05 */

document.writeln(`<h3> Task No.5 </h3>`)

var country = "Pakistani"
document.writeln("String: "+ country,"<br>")
document.writeln("Character at index 3 is : "+country[3] ,"<br>")
console.log(country);
console.log(country);

 /* Task No.06 */

document.writeln(`<h3> Task No.6 </h3>`)

first_name = prompt("what is you First name?");
last_name = prompt("what is you Last name?");
full_name = first_name.concat(last_name) 
document.writeln("welcome the coding world Mr."+full_name) */

/* Task No.07

document.writeln(`<h3> Task No.7 </h3>`)

var city = "Hydrabad"
document.writeln("City name: "+city,"<br>")
document.writeln("After replace:  "+city.replace("Hydra","Islama"))

/* Task No.08 */

document.writeln(`<h3> Task No.8 </h3>`)


var message = "Ali and Sami are best friends. They play cricket and football together"
document.writeln("Orignal Message : "+ message,"<br>")
document.writeln("After 'And' Change with '& ' Message : "+ message.replaceAll("and","&"));

/* Task No.09 */

document.writeln(`<h3> Task No.9 </h3>`)

var num = "472"
var num1 = Number(num)
document.writeln("value " + num, "<br>")
document.writeln("Typeof  " + typeof(num),"<br>")
document.writeln("value " + num1 +  "<br>")
document.writeln("Typeof  " + typeof(num1))

/* Task No.10 */

document.writeln(`<h3> Task No.10 </h3>`)

var city_name = prompt("Enter Your city name")
document.writeln("User Input:  "+ city_name ,"<br>")
document.writeln("Upper Case:  "+ city_name.toUpperCase())


/* Task No.11 */

document.writeln(`<h3> Task No.11 </h3>`)

var lang = prompt("Enter Your favorite programming language ")
document.writeln("User Input:  "+ lang ,"<br>")
document.writeln("Title Case:  "+ lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase())


/* Task No.12 */

document.writeln(`<h3> Task No.12 </h3>`)

 var num2 = 35.36;
 document.writeln("Result: " + num2.toString().replace(".", ""));


 /* Task No.13 */

document.writeln(`<h3> Task No.13 </h3>`)


 /* Task No.14 */

document.writeln(`<h3> Task No.14 </h3>`)

var matchFound = false;
 var A = ["cake", "apple pie", "cookie" , "chips", "patties"]
var order = prompt("Welcome to ABC Bakery.What do you want to order sir/mamam?").toLowerCase()
for (var i = 0; i < A.length; i++) {
    if (order === A[i]) {
        matchFound = true;
        document.writeln(`${order} is available at index ${i} in our bakery`)
        break;
    }    
}
if (matchFound === false) {
 document.writeln(`We are sorry. ${order} is not available in our bakery`);
 }

 /* Task No.15 */

document.writeln(`<h3> Task No.15 </h3>`)

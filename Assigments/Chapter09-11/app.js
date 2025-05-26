/* Task No.1 */



var city_name = prompt("Enter You City Name:?")
console.log(city_name);
if (city_name.toUpperCase() === "KARACHI") {
    console.log("“Welcome to city of lights”");
}else {
    console.log("Wellcome");
}



/* Task No.01 End */


/* Task No.02 */



var gender = prompt("Enter You gender :?")
console.log(gender);
if (gender.toUpperCase() === "MALE") {
    console.log("Good Morning Sir.");
}else {
    console.log("Good Morning Madam");
}


/* Task No.02 End */


/* Task No.03 */

var signal_color = prompt("Enter the current signal color :")
console.log(signal_color);
if (signal_color.toLowerCase() === "red" ) {
    console.log("Must Stop");   
} else if (signal_color.toLowerCase() === "yellow") { 
    console.log("Ready to Move");
} else if (signal_color.toLowerCase() === "green") {
    console.log("Move now ");   
} else {
    console.log("Re Enter you color");   
}


/* Task No.03 End */


/* Task No.04 */



var remaining_fuel = +prompt("Enter the remaining fuel in your Car:")
console.log(remaining_fuel);
if (remaining_fuel <= .25) {
    console.log("“Please refill the fuel in your car”");   
}



/* Task No.04 End */


/* Task No.05 */

/* Part A */

var a = 4;
if (++a === 5){
alert("Task No.04(a)\n given condition for variable a is true");
}

/* Part B */

var b = 82;
if (b++ === 83){
alert("Task No.04(b)\n given condition for variable b is true");
} else {alert("Task No.04(b)\n given condition for variable b is false ")};

/* Part c */

var c = 12;
if (c++ === 13){
alert("Task No.04(c)\n condition 1 is true");
}
console.log("condition 1 is  " + c);
if (c === 13){
alert(" Task No.04(c)\n condition 2 is true");
}
console.log("condition 2 is  " + c);
if (++c < 14){
alert("Task No.04(c)\n condition 3 is true");
}
console.log("condition 3 is  " + c);
if(c === 14){
alert(" Task No.04(c)\n condition 4 is true");
}
console.log("condition 4 is  " + c);

/* Part d */

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert(" Task No.04(d)\n The cost equals");
}

/* Part e */

if (true){
alert(" Task No.04(e)\n True");
}
if (false){
alert("False");
}

/* Part f */

if("car" < "cat"){
alert(" Task No.04(f)\n car is smaller than cat");
}

/* Task No.05 End */


/* Task No.06 */

var subject1 = +prompt("Enter 1st subjet marks:")
var subject2 = +prompt("Enter 1st subjet marks:")
var subject3 = +prompt("Enter 1st subjet marks:")
var total_marks = subject1 + subject2 + subject3 
var percentage = (total_marks / 300 )*100
console.log(percentage);

if (percentage >= 80) {
    console.log("Mark Sheet");
    console.log("Total Marks : 300 ");
    console.log(percentage+"%");
    console.log("Grade  : A-One");
    console.log("Remarks : Excellent");
      
} else if (percentage >= 70) {
    console.log("Mark Sheet");
    console.log("Total Marks : 300 ");
    console.log(percentage+"%");
    console.log("Grade  : A");
    console.log("Remarks : Good");
    
}  else if (percentage >= 60) {
    console.log("Mark Sheet");
    console.log("Total Marks : 300 ");
    console.log(percentage+"%");
    console.log("Grade  : B");
    console.log("Remarks : You Need To Improve");
} else if (percentage < 60) {
    console.log("Mark Sheet");
    console.log("Total Marks : 300 ");
    console.log(percentage+"%");
    console.log("Grade  : Fail");
    console.log("Remarks : Sorry");
}


/* Task No.06 End */


/* Task No.07 */

var secret_number  = 8
var guess_number = +prompt("Guess the Number Between 1 to 10 :")
if (secret_number == guess_number) {
    console.log("Bingo");
    
} else if (secret_number == guess_number+1){
    console.log("Close enough to the correct answer");
    
} else {
    console.log("Sorry! Unlucky");
    
}

/* Task No.07 End */


/* Task No.08 */

var number = +prompt("Enter you number : ")
if (number%3 === 0) {
    console.log("your given number is equally divided by 3");
    console.log("Your # is " + number);
    console.log("Your # after Divided by 3 is  " +number/3);
    
} else {
    console.log("your given number is  not equally divided by 3")
    console.log(number);
    
}

/* Task No.08 End */


/* Task No.09 */

var num = +prompt("Enter you number : ")
if (num%2 === 0) {
    console.log("Even Number ");
} else {
    console.log("Odd number");
    
}

/* Task No.09 End */

/* Task No.10 */

var temperature = +prompt("Enter current temperature is your city: ")
if (temperature > 40) {
    console.log("It is too hot outside.");  
} 
else if (temperature > 30) {
    console.log("The Weather today is Normal.");  
} 
else if (temperature > 20) {
    console.log("Today’s Weather is cool.");  
} 
else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");  
} 

/* Task No.10 End */

/* Task No.11 */

var first_number = +prompt("Enter you First Number :")
var secend_number = +prompt("Enter you Secend Number :")
var operation = prompt("kindly select your + ,- , / , *")

if (operation  === "+") {
    console.log(first_number + secend_number); 
}
if (operation  === "-") {
    console.log(first_number - secend_number); 
}
if (operation  === "/") {
    console.log(first_number / secend_number); 
}
if (operation  === "*") {
    console.log(first_number * secend_number); 
}
/* Task No.11 */
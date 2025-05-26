/* Task No.1 */

var character = prompt("Enter a character:");
  var charCode = character.charCodeAt(0);

  if (charCode >= 48 && charCode <= 57) {
    console.log("It is a number.");
  } else if (charCode >= 65 && charCode <= 90) {
    console.log("It is an uppercase letter.");
  } else if (charCode >= 97 && charCode <= 122) {
    console.log("It is a lowercase letter.");
  } else {
    console.log("It is a special character or not a single valid input.");
  }

/* Task No.1 End */

/* Task No.2 */

  var num1 = +prompt("Enter Your 1st Number")
  var num2 = +prompt("Enter Your 2nd Number")

  if (num1 > num2) {
    console.log("Number 1 is larger Number");

  } else if (num2 > num1 ) {
    console.log("Number 2 is larger Number");

  } else if (num2 == num1 ) {
    console.log("Both Numbers are Equall");
  }

/* Task No.2 End */

/* Task No.3 */

var number = +prompt("Enter a number:");

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

/* Task No.3 End */

/* Task No.4 */

var alphbat_character = prompt("Enter a single  alphbat character:").toLowerCase();
if (alphbat_character.length === 1) {
  if (
    alphbat_character === "a" ||
    alphbat_character === "e" ||
    alphbat_character === "i" ||
    alphbat_character === "o" ||
    alphbat_character === "u"
  ) {
    console.log(true + ":  Alphbat character is Vowel");
  }else {
    console.log(false +":  Alphbat character is Content" ); 
  }
} else {
  console.log("Please enter only single alphbat character");
}

/* Task No.4 End */

/* Task No.5 */


alert("sign up page")
var user_id  = prompt("For Sign Up please enter your vaild Email Address:")
var pass_word = +prompt("please enter your desired password(only in number)")
alert("sign in page ")
var user_email = prompt("please enter email address")
if (user_id === user_email ) {
  var password = +prompt("please enter password")
  if (pass_word === password){
    console.log("Correct! The password you entered matches the original password.");
  } else{
    console.log("Incorrect password");   
  }
} else {
  console.log("please enter correct Email address");
  
}

/* Task No.5 End */

/* Task No.6 */

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
console.log(greeting);

}else{
greeting = "Good evening";
console.log(greeting);

}

/* Task No.6 End */

/* Task No.7 */



var enter_time = +prompt("Enter time 24hours clock format like: 1900 = 7pm.")
if (enter_time === 0 && enter_time <= 1200) {
  console.log("Good Morning"); 
} else if (enter_time >=1200 && enter_time < 1700) {
  console.log("Good Afternoon");
} else if (enter_time >=1700 && enter_time < 2100) {
  console.log("Good Evening")
} else if (enter_time >=2100 && enter_time <= 2359) {
  console.log("Good Night")
}
/* Task No.7 End */
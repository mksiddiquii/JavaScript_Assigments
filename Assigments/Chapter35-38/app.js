document.writeln(`<h1> Chapter 35 to 38 Assigments</h1>`)
 /* Task No.01 */

document.writeln(`<h3> Task No.1 </h3>`)
 

function current_time() {
    var time = new Date
    document.writeln(`Current Time:  ${time}`)
}

current_time()

 /* Task No.02 */

document.writeln(`<h3> Task No.2 </h3>`)

function greeting() {
    var first_name = prompt("What is Your first Name ?  ")
    var last_name= prompt("What is Your last Name ?  ")
    document.writeln(`Wellcome ${first_name}  ${last_name}`)
}

// greeting()

/* Task No.03 */

document.writeln(`<h3> Task No.3 </h3>`)

function add_two_number() {
    var num = +prompt("Enter Your First number:")
     var num1 = +prompt("Enter Your 2nd  number:")
    return num+num1
}
// document.writeln(`Sum of Two Number is:  ${add_two_number()}`)

/* Task No.04 */

document.writeln(`<h3> Task No.4 </h3>`)

function calculator(num1,num2,operator) {
     num1 = +prompt("Enter Your First number:")
     num2 = +prompt("Enter Your 2nd  number:")
     operator = prompt("Enter Your operator (+,-,*,/):")
    if (operator === "+" ) {
        return num1+num2
    }else if (operator === "-"){
        return num1 - num2
    }else if (operator === "*"){
        return num1 * num2
    }else if (operator === "/"){
        if (num2 !=0 ) {
            return num1/num2
        } else {
            return "Cannot Divided by Zero"
        }
    } else {
        return "Kindly enter Correct Operator:"
    }
}
 
// var result = calculator()
// document.writeln(`Result of Your Calculation is : ${result}`)

/* Task No.05 */

document.writeln(`<h3> Task No.5 </h3>`)

function square(num) {
    return num*num
    
}
document.writeln(square(9))



document.writeln("<h1>Chapter 14 to 16 (Arrays)</h1>")

/* Task No.1 */

var student_name = []
student_name = [1,2,3]
console.log(student_name);


/* Task No.2 */

var student_names = new Array()
student_names = ["A","b"]
console.log(student_names);

/* Task No.3 */

var city_names = ["Karachi","hydrabad","Nawabshah","Sukkur","Multan","Lahore","islamabad"]

/* Task No.4 */

var numbers = [1,2,3,4,5,6,7,8]

/* Task No.5 */

var boolean = [true , false ,true ]

/* Task No.6 */

var mixed_arrays = [1,2,null ,true,"Kamran", "ali" , 4.5]

/* Task No.7 */

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.writeln("<h3>Qualifications in Pakistan:</h3>");
document.writeln("<ol>");
document.writeln("<li>" + qualifications[0] + "</li>");
document.writeln("<li>" + qualifications[1] + "</li>");
document.writeln("<li>" + qualifications[2] + "</li>");
document.writeln("<li>" + qualifications[3] + "</li>");
document.writeln("<li>" + qualifications[4] + "</li>");
document.writeln("<li>" + qualifications[5] + "</li>");
document.writeln("<li>" + qualifications[6] + "</li>");
document.writeln("<li>" + qualifications[7] + "</li>");
document.writeln("</ol>");


/* Task No.8 */

var students_name = ["Ali","Ahmed","Aaliyan"]
var students_marks = [492,485,470]
var total_marks = 500
var ali_percentage = total_marks/
document.writeln("<h3>Task#8 - Students Marks And Percentage</h3>")
document.writeln("Score of  "+ students_name[0]+ "  is  " +students_marks[0] +"." +"  Percentage is  " + (students_marks[0]/total_marks)*100 +"%" ,"<br>" )
document.writeln("Score of  "+ students_name[1]+ "  is  " +students_marks[1] +"." +"  Percentage is  " + (students_marks[1]/total_marks)*100 +"%" ,"<br>" )
document.writeln("Score of  "+ students_name[2]+ "  is  " +students_marks[2] +"." +"  Percentage is  " + (students_marks[2]/total_marks)*100 +"%" ,"<br>" )


/* Task No.9 */
document.writeln("<h3>Task#9 - COLOR</h3>")
//Initialize array
var color_name = ["Red","Green","Blue","Black"]
document.writeln(color_name, "<br>")

// a. Add to beginning

var color1 = prompt("what color You wants to add to the beginning")
color_name.unshift(color1)
document.writeln("After one color add at the beginning is : "+ color_name ,"<br>")

// b. Add to end

var color2 = prompt("what color You wants to add at the Ending")
color_name.push(color2)
document.writeln("After one color add at the Ending is : "+ color_name ,"<br>")

// c. Add two more to beginning

color_name.unshift("orange",'yellow')
document.writeln("After two More color add at the beginning is : "+ color_name ,"<br>")

// d. Delete first color

colors.shift();
document.writeln("After deleting first color: " + colors + "<br>")

// e. Delete last color

color_name.pop();
document.writeln("After deleting last color: " + color_name + "<br>");

// f. Add color at user-defined index

var indexAdd = +prompt("Enter the index to add a color:");
var colorName = prompt("Enter the color name to add:");
color_name.splice(indexAdd, 0, colorName);
document.writeln("After adding at index: " + color_name + "<br>");

 // g. Delete color(s) from user-defined index
var indexDel = +prompt("Enter the index to delete color(s):");
var countDel = +prompt("Enter how many colors to delete:");
color_name.splice(indexDel, countDel);
document.writeln("After deleting color(s): " + color_name + "<br>");

/* Task No.10 */

var student_scores = [320,230,480,120]
student_scores.sort()
console.log(student_scores);

/* Task No.11 */

var cities = ["Karachi","hydrabad","Nawabshah","Sukkur","Multan","Lahore","islamabad"]
var selected_cities=cities.slice(2,5)
console.log(selected_cities);


/* Task No.12 */
var arr = ["This","is","my","cat"];
console.log(arr);
console.log(arr.join(" "));

/* Task No.13 */
var devices =[]
console.log("Add items in Arrays");
devices.push("keyboard")
console.log(devices);
devices.push("Mouse")
console.log(devices);
devices.push("printer")
console.log(devices);
devices.push("Monitor")
console.log(devices);
console.log("remove items from Arrays FIFO Bases");
devices.shift()
console.log(devices);
devices.shift()
console.log(devices);
devices.shift()
console.log(devices);
devices.shift()
console.log(devices);

/* Task No.13 */
var devices =[]
console.log("Add items in Arrays");
devices.unshift("keyboard")
console.log(devices);
devices.unshift("Mouse")
console.log(devices);
devices.unshift("printer")
console.log(devices);
devices.unshift("Monitor")
console.log(devices);
console.log("remove items from Arrays FIFO Bases");
devices.pop()
console.log(devices);
devices.pop()
console.log(devices);
devices.pop()
console.log(devices);
devices.pop()
console.log(devices);

/* Task No.15 */
document.writeln("<h3>Task#15 - Drop Down</h3>")
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.writeln("<select>");
document.writeln("<option>" + manufacturers[0] + "</option>");
document.writeln("<option>" + manufacturers[1] + "</option>");
document.writeln("<option>" + manufacturers[2] + "</option>");
document.writeln("<option>" + manufacturers[3] + "</option>");
document.writeln("<option>" + manufacturers[4] + "</option>");
document.writeln("<option>" + manufacturers[5] + "</option>");
document.writeln("</select>");

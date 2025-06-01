/* Task No.01 */

var multidimensional_arrays = [
    [],
    [],
    []
    ]

    /* Task No.02 */
document.writeln(`<h3> Task No.2 </h3>`)  
var multidimensional_arrays =[
        [0,1,2,3],
        [1,0,1,2],
        [2,1,0,1]
    ]
for (var i = 0; i < multidimensional_arrays.length; i++) {
  for (var j = 0; j < multidimensional_arrays[i].length; j++) {
    document.writeln(multidimensional_arrays[i][j] + " ");
  }
  document.writeln("<br>");
}

    /* Task No.03 */
document.writeln(`<h3> Task No.3 </h3>`)  

for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}


    /* Task No.04 */
document.writeln(`<h3> Task No.4 </h3>`)  


/* var table = +prompt("Enter which table you want to calculate:")
var table_length = +prompt("Enterlength of mutiplication table :")
document.writeln(`<h4>Multiplication table ${table} lenght ${table_length}</h4><br>`)
for (i =0 ; i<=table_length ; i++){
    document.writeln(`${table} X ${i} = ${i*table} <br> `)
} */

    /* Task No.05 */
document.writeln(`<h3> Task No.5 </h3>`) 

var fruits = ["Apple","Banana","Mango","Orange","Straberry"]

for (var i=0; i<fruits.length ; i++){
    document.writeln(`${fruits[i]} <br>`);
}

for (var i=0 ; i<fruits.length ; i++) {
    document.writeln(`Element at index ${i} is ${fruits[i]} <br>`);
}

    /* Task No.06 */
document.writeln(`<h3> Task No.6  </h3>`) 
document.writeln(`<h4> Task No.6 (A)  Counting: </h4>`) 

for (var i = 1 ; i <=15 ; i++){
    document.writeln(i+ ",")
}

document.writeln(`<h4> Task No.6 (B) Reverse Counting: </h4>`) 

for (var i = 10 ; i >= 1 ; i--){
    document.writeln(i+ ",")
    
}
document.writeln(`<h4> Task No.6 (C) Even: </h4>`) 

for (var i = 0 ; i <= 40 ; i++){
    if (i%2===0) {
      document.writeln(i+ ",")  
    }
}

document.writeln(`<h4> Task No.6 (D) Odd: </h4>`) 

for (var i = 0 ; i <= 20 ; i++){
    if (i%2  !=  0) {
      document.writeln(i+ ",")  
    }
}

document.writeln(`<h4> Task No.6 (E) Series: </h4>`) 

for (var i = 1 ; i <= 20 ; i++){
    if (i%2===0) {
      document.writeln(i+"k"+ ",")  
    }
}

    /* Task No.07 */
document.writeln(`<h3> Task No.7  </h3>`) 


  /* Task No.08 */
document.writeln(`<h3> Task No.8  </h3>`) 

var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.writeln("Array items: " + A + "<br>");
document.writeln("The largest number is: " + largest);


/* Task No.09 */
document.writeln(`<h3> Task No.9  </h3>`) 

var A = [24, 53, 78, 91, 12];
var smallest= A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        largest = A[i];
    }
}

document.writeln("Array items: " + A + "<br>");
document.writeln("The largest number is: " + smallest);

/* Task No.10 */
document.writeln(`<h3> Task No.10 </h3>`) 

for (var i = 1 ; i <= 100 ; i++){
    if (i%5===0) {
      document.writeln(i+ ",")  
    }
}
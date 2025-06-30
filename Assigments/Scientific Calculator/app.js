let input = document.getElementById('input');

function display(val) {
    input.value += val;
}

function clearAll() {
    input.value = '';
}
function calculate() {
    input.value = eval(input.value);
}
function sin() {
    input.value = Math.sin(input.value)
    
}
function cos() {
    input.value = Math.cos(input.value)
    
}
function tan() {
    input.value = Math.tan(input.value)
    
}
function log() {
    input.value = Math.log(input.value)
    
}
function ln() {
    input.value = Math.ln(input.value)
    
}
function e() {
    input.value = 2.71828182846
    
}
function pow() {
    input.value =Math.pow(input.value,2)
    
}
function pow1(y) {
    input.value =Math.pow(input.value,y)
    
}
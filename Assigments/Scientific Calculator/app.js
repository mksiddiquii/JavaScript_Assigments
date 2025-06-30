let input = document.getElementById('input');

function display(val) {
    input.value += val;
}

function clearAll() {
    input.value = '';
}
function calculate() {
    var expression = input.value;
        expression = expression.replace(Math.sin)
                               .replace(Math.cos)
                               .replace(Math.tan)
                               .replace(Math.log10) 
                               .replace(Math.log)    
                               .replace(Math.sqrt)
                               .replace(Math.E);

        input.value = eval(expression);
    
    }

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
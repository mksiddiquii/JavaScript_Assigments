var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");

var minute = 0;
var second = 0;
var millisecond = 0;
var interval;

function timer() {
  millisecond++;
  msec.innerHTML = millisecond;
  if (millisecond == 99) {
    millisecond = 0;
    second++;
    sec.innerHTML = second;
  }
  if (second == 59) {
    minute++;
    second = 0;
    millisecond = 0;
    min.innerHTML = minute;
  }
}

function starttimer() {
  interval = setInterval(timer, 10);
  start.disabled = true;
  pause.disabled = false;
  reset.disabled = false;
}

function pausetimer() {
  clearInterval(interval);
  start.disabled = false;
  pause.disabled = true;
  reset.disabled = false;
}

function resettimer() {
  pausetimer();
  minute = 0;
  second = 0;
  millisecond = 0;
  min.innerText = minute;
  sec.innerText = second;
  msec.innerText = millisecond;
  start.disabled = false;
  pause.disabled = true;
  reset.disabled = true;
}

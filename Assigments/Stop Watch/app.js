var min=document.getElementById('min')
var sec=document.getElementById('sec')
var msec=document.getElementById('msec')
var start=document.getElementById('start')
var pause=document.getElementById('pause')
var reset=document.getElementById('reset')


        var minute = 0;
        var second = 0;
        var millisecond = 0;
        var interval;

        function timer() {
            millisecond += 10;
            if (millisecond = 99) {
                millisecond = 0;
                second++;
            }
            if (second = 59) {
                second = 0;
                minute++;
            }

        
    }

        function start() {
            
            interval = setInterval(timer, 10)
        }

        function pause() {
            clearInterval(interval);
        }

        function reset() {
            pause();
            minute = 0;
            second = 0;
            millisecond = 0;
            min.innerText = '00';
            sec.innerText = '00';
            msec.innerText = '00';
        }
var isIntervalStop = false;

function onButtonStart(e) {

    if (e.innerHTML == 'Pause') {
        e.innerHTML = 'Continue';
        isIntervalStop = true;
    }
    else {
        e.innerHTML = 'Pause';
        e.className = "btn btn-primary";
        isIntervalStop = false;
    }
    setInterval(timer, 11);
}

function onButtonClear() {
    var miliSeconds = document.getElementById('miliSeconds');
    var seconds = document.getElementById('seconds');
    var minutes = document.getElementById('minutes');
    var hours = document.getElementById('hours');
    miliSeconds.innerHTML = 0;
    seconds.innerHTML = 0;
    minutes.innerHTML = 0;
    hours.innerHTML = 0;
    isIntervalStop = true;
    var btnClick = document.getElementById('btnStart');
    btnClick.innerHTML = 'Start';
    btnClick.className = 'btn btn-success';
}

function timer() {
    if (isIntervalStop == false) {
        var miliSeconds = document.getElementById('miliSeconds');

        miliSeconds.innerHTML = +miliSeconds.innerHTML + 11;

        if (miliSeconds.innerHTML >= 1000) {
            var seconds = document.getElementById('seconds');
            seconds.innerHTML++;
            miliSeconds.innerHTML = 0;

            if (seconds.innerHTML == 59) {
                var minutes = document.getElementById('minutes');
                minutes.innerHTML++;
                seconds.innerHTML = 0;

                if (minutes.innerHTML == 59) {
                    var hours = document.getElementById('hours');
                    hours.innerHTML++;
                    minutes.innerHTML = 0;
                }
            }
        }
    }

}

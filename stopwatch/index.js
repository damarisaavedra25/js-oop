//stop watch
//has duration a property
//three methods, reset, start and stop
//initially duration is 0
var startTime; //to keep trate of the start time
var stopwatchInterval;//to keep track of the interval
var elapsedPauseTime = 0; // to keep track of the elapsed time while stopped

function startStopwatch() {
    if (!stopwatchInterval) {
        startTime = new Date().getTime() - elapsedPauseTime; //get the starting time by subtraction the elapsed time from the current time
        stopwatchInterval = setInterval(updateStopwatch, 1000); //update every second
    }
}
function stopStopwatch() {
    clearInterval(stopwatchInterval); // stop the interval
    elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
    stopwatchInterval = null; // reset the interval variable
    }

    function resetStopwatch() {
        stopStopwatch(); // stop the interval
        elapsedPauseTime = 0; // reset the elapsed paused time variable
    }

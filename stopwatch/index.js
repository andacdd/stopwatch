const timeDisplay = document.querySelector(".time-display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");


let startTime = 0;
let currentTime = 0;
let elapseTime = 0;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;
let intervalId = 0;


startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapseTime;
        intervalId = setInterval(updateTime, 1000);
    }

});
pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);

    startTime = 0;
    currentTime = 0;
    elapseTime = 0;
    paused = true;
    hrs = 0;
    mins = 0;
    secs = 0;
    intervalId = 0;
    timeDisplay.textContent = `00:00:00`;
});

function updateTime() {
    elapseTime = Date.now() - startTime;
    secs = Math.floor((elapseTime / 1000) % 60);
    mins = Math.floor((elapseTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapseTime / (1000 * 60 * 60)) % 60);


    secs = revealZeroes(secs);
    mins = revealZeroes(mins);
    hrs = revealZeroes(hrs);
    console.log(secs);
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
    function revealZeroes(unit) {
        return ("0" + unit).length > 2 ? unit : "0" + unit;
    }
}
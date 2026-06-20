// Stopwatch Variables

let timer;
let isRunning = false;

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let lapCount = 1;

// Elements

const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

const laps = document.getElementById("laps");

// Update Display

function updateDisplay() {

    let h =
    hours.toString().padStart(2, "0");

    let m =
    minutes.toString().padStart(2, "0");

    let s =
    seconds.toString().padStart(2, "0");

    display.textContent =
    `${h}:${m}:${s}`;
}

// Start Stopwatch

function startStopwatch() {

    if (isRunning) return;

    isRunning = true;

    timer = setInterval(() => {

        milliseconds += 10;

        if (milliseconds >= 1000) {

            milliseconds = 0;
            seconds++;

        }

        if (seconds >= 60) {

            seconds = 0;
            minutes++;

        }

        if (minutes >= 60) {

            minutes = 0;
            hours++;

        }

        updateDisplay();

    }, 10);
}

// Pause Stopwatch

function pauseStopwatch() {

    clearInterval(timer);

    isRunning = false;
}

// Reset Stopwatch

function resetStopwatch() {

    clearInterval(timer);

    isRunning = false;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    lapCount = 1;

    updateDisplay();

    laps.innerHTML = "";
}

// Add Lap

function addLap() {

    if (
        hours === 0 &&
        minutes === 0 &&
        seconds === 0
    ) {
        return;
    }

    const lapItem =
    document.createElement("li");

    let h =
    hours.toString().padStart(2, "0");

    let m =
    minutes.toString().padStart(2, "0");

    let s =
    seconds.toString().padStart(2, "0");

    lapItem.innerHTML =
    `🏁 Lap ${lapCount} : ${h}:${m}:${s}`;

    laps.prepend(lapItem);

    lapCount++;
}

// Button Events

startBtn.addEventListener(
"click",
startStopwatch
);

pauseBtn.addEventListener(
"click",
pauseStopwatch
);

resetBtn.addEventListener(
"click",
resetStopwatch
);

lapBtn.addEventListener(
"click",
addLap
);

// Initial Display

updateDisplay();


// Keyboard Shortcuts

document.addEventListener(
"keydown",
(e) => {

    if (e.code === "Space") {

        e.preventDefault();

        if (isRunning) {

            pauseStopwatch();

        } else {

            startStopwatch();

        }
    }

    if (e.key === "r" || e.key === "R") {

        resetStopwatch();

    }

    if (e.key === "l" || e.key === "L") {

        addLap();

    }

});
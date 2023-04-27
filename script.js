const time = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
let ms = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let totalTime = 0;
let interval;

startButton.onclick = function () {
  clearInterval(interval);
  interval = setInterval(start, 10);
};

stopButton.onclick = function () {
  clearInterval(interval);
};

resetButton.onclick = function () {
  clearInterval(interval);
  time.innerHTML = "00:00:00:00";
  ms = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  totalTime = 0;
};

function start() {
  totalTime++;
  updateScreen();
}

function updateScreen() {
  ms = totalTime % 100;
  seconds = pad(Math.floor((totalTime / 100) % 60));
  minutes = pad(Math.floor((totalTime / (100 * 60)) % 60));
  hours = pad(Math.floor(totalTime / (100 * 60 * 60)));

  time.innerHTML = `${hours}:${minutes}:${seconds}:${ms}`;
}

function pad(unit) {
  if (unit < 10) {
    return "0" + unit;
  }
  return unit;
}

let minutes = 0;
let seconds = 0;
let milliSec = 0;

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerEle = document.getElementById("timer").querySelector("h1");
const scaleEle = document.getElementById("move");
let timer;

/* Add event for Start button - 
On click the variable milliSec will increment by 1 for every on 10 microsecond 
and increment seconds by 1 if millisecond reach 100, minute is incremented by 1
when seconds reaches 60*/
startBtn.addEventListener("click", () => {
  timer = setInterval(() => {
    milliSec++;
    if (milliSec > 99) {
      milliSec = 0;
      seconds++;
    }
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    displayTimer();
  }, 10);

  startBtn.disabled = true;
});

/*Event for Stop button - 
Clear the interval*/
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  startBtn.disabled = false;
});

/*Event for Reset button - 
Make values of seconds, minutes and millisecond to 0 and clear interval*/
resetBtn.addEventListener("click", () => {
  minutes = 0;
  seconds = 0;
  milliSec = 0;
  clearInterval(timer);
  displayTimer();
});

/*Display timer function  access the second minute and millisecond variable
and put it on the timer element*/
function displayTimer() {
  const minuteTemp = minutes < 10 ? "0" + minutes : minutes;
  const secondTemp = seconds < 10 ? "0" + seconds : seconds;
  const milliSecTemp = milliSec < 10 ? "0" + milliSec : milliSec;
  timerEle.textContent = `${minuteTemp} : ${secondTemp} : ${milliSecTemp}`;
  scaleEle.style.width = `${seconds * 1.67}%`;
}

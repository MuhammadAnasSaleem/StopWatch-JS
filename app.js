let [millieseconds, seconds, minutes, hours] = [0, 0, 0, 0];
const display = document.querySelector("#display");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
let int = null;

start.addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displaytime, 10);
});
stop.addEventListener("click", () => {
  clearInterval(int);
});
reset.addEventListener("click", () => {
  clearInterval(int);
  [millieseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  display.innerHTML = "00:00:00:00";
});
function displaytime() {
  millieseconds += 10;
  if (millieseconds == 1000) {
    millieseconds = 0;
    seconds += 1;
    if (seconds == 60) {
      seconds = 0;
      minutes += 1;
      if (minutes == 60) {
        minutes = 0;
        hours += 1;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    millieseconds < 10
      ? "00" + millieseconds
      : millieseconds < 100
      ? "0" + millieseconds
      : millieseconds;
  display.innerHTML = `${h}:${m}:${s}:${ms}`;
}

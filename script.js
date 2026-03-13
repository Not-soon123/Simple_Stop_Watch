// Select elements
const clock = document.getElementById("clock");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = null;
function updateClock(){
   const hh = hours.toString().padStart(2,"0");
   const mm = minutes.toString().padStart(2,"0");
   const ss = seconds.toString().padStart(2,"0");
   clock.textContent=`${hh}:${mm}:${ss}`;
}

function startSecond(){
  if (timer) return;
  timer = setInterval(() => {
    seconds++;
    
    if (seconds === 60){
      seconds = 0;
      minutes++;
    }

    if (minutes === 60){
     minutes = 0;
     hours++;
    }

    if (hours === 1){
      clock.textContent = "You can take a rest!!!!";
      return;
    }
    updateClock()
  },1000);
}
function stopThseInterval(){
   clearInterval(timer);
   timer = null;
}


function resetTheClock(){
    stopThseInterval()
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateClock();
}


btnStart.addEventListener('click',startSecond);
btnReset.addEventListener('click', resetTheClock);
btnStop.addEventListener('click', stopThseInterval);

updateClock()
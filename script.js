let startBtn = document.getElementById("start-btn");
let pauseBtn = document.getElementById("pause-btn");
let resetBtn = document.getElementById("reset-btn");
let interval;

startBtn.addEventListener("click", (e) => {
  let dayElement = document.getElementById("day");
  let hourElement = document.getElementById("hr");
  let minuteElement = document.getElementById("min");
  let secondElement = document.getElementById("sec");
  let day = parseInt(dayElement.innerHTML);
  let hour = parseInt(hourElement.innerHTML);
  let minute = parseInt(minuteElement.innerHTML);
  let second = parseInt(secondElement.innerHTML);
  
  let countdown = new Date().getTime()+(day * 1000*60*60*24) + (hour * 1000*60*60) + (minute *1000*60) + (second * 1000);
console.log(countdown);
  interval= setInterval(() => {
    let now = new Date().getTime();
    let diff = countdown - now;
    var d = Math.floor((diff / (1000 * 60 * 60 * 24)) )
    var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((diff % (1000 * 60)) / 1000);

    // console.log(hrs);
    // console.log(Min);
    // console.log(sec);

    day.innerHTML=`${d}`
    hourElement.innerHTML = `${hrs} `;
    minuteElement.innerHTML = `${Min}`;
    secondElement.innerHTML = `${sec}`;
  }, 1000);
});
pauseBtn.addEventListener("click",()=>{
    clearInterval(interval)
})



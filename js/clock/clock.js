const clock = document.getElementById("clock");
const UPDATE_INTERVAL_ms = 100;

const updateClock = () => {
  const now = new Date();
  const formatted = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日-${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${Math.floor(now.getMilliseconds() / 100)}`;
  
  clock.textContent = formatted;
  clock.setAttribute("datetime", now.toISOString());
};

updateClock();
setInterval(updateClock, UPDATE_INTERVAL_ms);
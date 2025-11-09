const clock = document.getElementById("clock");

const updateClock = () => {
  const now = new Date();
  const formatted = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日　${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${Math.floor(now.getMilliseconds()/100)}`;
  clock.textContent = formatted;
};

setInterval(updateClock, 100);
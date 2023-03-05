/*
  Realtime clock
*/
const areaClock = document.querySelector("div#area-clock");
const areaDate = areaClock.querySelector("span:first-child");
const areaTime = areaClock.querySelector("span:last-child");

const realtimeClock = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  areaDate.innerText = `${year}. ${month}. ${day}`;
  areaTime.innerText = `${hours}:${minutes}:${seconds}`;
};

realtimeClock();
setInterval(realtimeClock, 1000);

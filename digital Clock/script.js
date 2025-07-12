const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampmText = "AM";

  if (h >= 12) {
    ampmText = "PM";
    if (h > 12) h -= 12;
  } else if (h === 0) {
    h = 12;
  }

  hours.textContent = h.toString().padStart(2, "0");
  minutes.textContent = m.toString().padStart(2, "0");
  seconds.textContent = s.toString().padStart(2, "0");
  ampm.textContent = ampmText;
}

setInterval(updateClock, 1000);
updateClock();

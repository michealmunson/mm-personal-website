function updateTime() {
  const now = new Date();
  const pastDate = new Date("1997-12-05T21:30:00");
  const diff = now - pastDate;

  // Calculate the difference in various units
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  document.getElementById("years").innerText = years;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time immediately
updateTime();

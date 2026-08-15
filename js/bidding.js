let currentBid = 1450;
let totalBids = 8;
let timeRemaining = 299; // 5 minutes in seconds

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
  const timerElement = document.getElementById("timer");
  if (timerElement) {
    timerElement.textContent = `${formattedMinutes}m ${formattedSeconds}s`;
  }

  if (timeRemaining > 0) {
    timeRemaining--;
  } else if (timerElement) {
    timerElement.textContent = "AUCTION CLOSED";
  }
}

function triggerBid() {
  if (timeRemaining <= 0) return;
  currentBid += 25;
  totalBids += 1;

  document.getElementById("live-bid-display").textContent = `$${currentBid.toLocaleString()}`;
  document.getElementById("bid-count").textContent = `${totalBids} Bids Placed`;
}

// Start timer tick
setInterval(updateTimerDisplay, 1000);
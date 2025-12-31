// Function to update the timer
function updateTimer() {
  const now = new Date();
  
  // Get day, month, year
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  
  // Get hours, minutes, seconds
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Format: dd/mm/yyyy, hh:mm:ss
  const timerString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
  
  // Update the HTML element
  document.getElementById('timer').textContent = timerString;
}

// Update timer immediately
updateTimer();

// Update timer every second
setInterval(updateTimer, 1000);
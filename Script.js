function unlockSite() {
  const passcode = document.getElementById("passcode").value;
  const correctPasscode = "gotha2025"; // Change this to your actual passcode

  if (passcode === correctPasscode) {
    document.getElementById("lock-screen").style.display = "none";
  } else {
    document.getElementById("error-msg").textContent = "Incorrect passcode. Try again.";
  }
}




document.addEventListener('DOMContentLoaded', () => {
  // Only handle dropdown for Events, not Photos
  const eventsToggle = document.getElementById('eventsToggle');
  const eventsMenu = document.getElementById('eventsMenu');

  eventsToggle.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page jumping
    eventsMenu.classList.toggle('show');
  });

  // Optional: close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!eventsToggle.contains(event.target) && !eventsMenu.contains(event.target)) {
      eventsMenu.classList.remove('show');
    }
  });
});

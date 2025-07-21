document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('photosToggle');
  const dropdownMenu = document.getElementById('photosMenu');

  toggleButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page jumping
    dropdownMenu.classList.toggle('show');
  });

  // Optional: close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!toggleButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
});

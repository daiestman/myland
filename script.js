// Theme Toggle
document.getElementById('scroll-down').addEventListener('click', function() {
  const featuresSection = document.querySelector('.features');
  featuresSection.scrollIntoView({ behavior: 'smooth' });
});

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  html.setAttribute('data-theme', 'dark');
}

// Scroll animation for feature cards
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

featureCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// Function to open the modal
function openModal(downloadUrl) {
  document.getElementById('password-modal').style.display = 'block';
  document.getElementById('password-input').value = ''; // Clear previous input
  document.getElementById('download-url').value = downloadUrl; // Store download URL
}

// Function to close the modal
function closeModal() {
  document.getElementById('password-modal').style.display = 'none';
}

// Function to verify the password
function verifyPassword() {
  const downloadUrl = document.getElementById('download-url').value;
  const userPassword = document.getElementById('password-input').value;

  // Get today's date and calculate the password
  const today = new Date();
  const month = today.getMonth() + 1; // GetMonth() is zero-based (0 = January)
  const day = today.getDate();

  // Format month and day to ensure two digits (e.g., 04 for April)
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedDay = day.toString().padStart(2, '0');

  // Create the password by concatenating month and day, then add 1
  const password = parseInt(formattedMonth + formattedDay) + 1;

  // Check if the entered password is correct
  if (parseInt(userPassword) === password) {
    // If correct, redirect to the download URL
    window.location.href = downloadUrl;
  } else {
    // If incorrect, show an alert
    alert("密码错误，请重新输入！");
  }
}

// Add event listener to download buttons
document.querySelectorAll('.download-button').forEach(button => {
  button.addEventListener('click', function() {
    const downloadUrl = this.getAttribute('data-download-url');
    openModal(downloadUrl);
  });
});

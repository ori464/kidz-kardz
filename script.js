// ====== Sidebar Toggle ======
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// ====== Auto-load Tabs ======
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    const target = tab.getAttribute('data-target');
    sections.forEach(section => {
      section.style.display = section.id === target ? 'block' : 'none';
    });
  });
});

// ====== Load Default Tab ======
window.addEventListener('load', () => {
  sections.forEach((section, index) => {
    section.style.display = index === 0 ? 'block' : 'none';
  });
});

// ====== Placeholder AI Feature ======
// This will later connect to your AI backend
const aiButton = document.getElementById('aiButton');
if (aiButton) {
  aiButton.addEventListener('click', () => {
    alert('AI feature coming soon! This will analyze card data and perform actions automatically.');
  });
}

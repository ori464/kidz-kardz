const toggleButton = document.getElementById("toggleMenu");
const sidebar = document.querySelector(".sidebar");

// Sidebar toggle for mobile
toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Smooth transitions
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

// Placeholder for future AI integration
const aiButton = document.getElementById("aiButton");
if (aiButton) {
  aiButton.addEventListener("click", () => {
    alert("AI Assistant coming soon!");
  });
}

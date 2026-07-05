

// ======================================
// AfriConnect Summit 2026
// JavaScript principal
// ======================================

// Exécution lorsque la page est chargée
document.addEventListener("DOMContentLoaded", () => {

    console.log("Bienvenue sur AfriConnect Summit 2026 !");

    // Année dynamique dans le footer
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    console.log("Le site est prêt !");
});
// Dark mode simple (base pour commit 3+)
const toggle = document.getElementById("theme-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
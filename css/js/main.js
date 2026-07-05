

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
/* COMPTE A REBOURS */

const eventDate = new Date("November 15, 2026 09:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    if(document.getElementById("days")){

        document.getElementById("days").innerHTML=days;
        document.getElementById("hours").innerHTML=hours;
        document.getElementById("minutes").innerHTML=minutes;
        document.getElementById("seconds").innerHTML=seconds;

    }

},1000);
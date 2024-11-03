const targetDate = new Date("2025-04-28T08:00:00Z");

function updateCountdown() {
    const now = new Date();
    const timeRemaining = Math.floor((targetDate - now) / 1000); // en secondes

    // Afficher le temps restant ou un message si la date est atteinte
    const countdownElement = document.getElementById("countdown");
    if (timeRemaining > 0) {
        countdownElement.textContent = timeRemaining;
    } else {
        countdownElement.textContent = "Regardez les infos !!!";
        clearInterval(interval); // Arrêter le minuteur
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Appel initial
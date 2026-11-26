const PREIS = 12.99;

const budget = (1000 + Math.floor(Math.random() * 1001)) / 100;
document.getElementById("budget").textContent = budget.toFixed(2).replace(".", ",") + "€";

const kannLeisten = budget >= PREIS;

function antworten(sagtJa) {
    window.location.href = sagtJa === kannLeisten ? "aakkp.html" : "htaed.html";
}

document.getElementById("ja").addEventListener("click", () => antworten(true));
document.getElementById("nein").addEventListener("click", () => antworten(false));

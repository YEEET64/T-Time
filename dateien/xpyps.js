const uhr = document.getElementById("uhr");
const stopp = document.getElementById("stopp");
const start = Date.now();

function zweistellig(zahl) {
    return String(zahl).padStart(2, "0");
}

function aktualisieren() {
    const gesamt = Math.floor((Date.now() - start) / 1000);
    const stunden = Math.floor(gesamt / 3600);
    const minuten = Math.floor((gesamt % 3600) / 60);
    const sekunden = gesamt % 60;
    uhr.textContent = `${zweistellig(stunden)}:${zweistellig(minuten)}:${zweistellig(sekunden)}`;
}

setInterval(aktualisieren, 100);

stopp.addEventListener("click", () => {
    const letzteZiffer = uhr.textContent.slice(-1);
    window.location.href = letzteZiffer === "2" ? "wioep.html" : "gladi.html";
});

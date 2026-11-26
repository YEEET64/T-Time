const muenze = document.querySelector("img");
const kopfKnopf = document.querySelector(".KButton");
const zahlKnopf = document.querySelector(".ZButton");

const BILDER = { Kopf: "../img/Kopf.png", Zahl: "../img/Zahl.png" };
const WECHSEL_MS = 100;
const DREH_DAUER_MS = 2000;
const ANZEIGE_MS = 2000;

let gedrueckt = false;

// Bilder vorladen, damit beim schnellen Wechseln nichts flackert
Object.values(BILDER).forEach((src) => { new Image().src = src; });

function werfen(tipp) {
    if (gedrueckt) return;
    gedrueckt = true;

    let zeigtKopf = true;
    const wechsel = setInterval(() => {
        muenze.src = zeigtKopf ? BILDER.Kopf : BILDER.Zahl;
        zeigtKopf = !zeigtKopf;
    }, WECHSEL_MS);

    setTimeout(() => {
        clearInterval(wechsel);
        const ergebnis = Math.random() < 0.5 ? "Kopf" : "Zahl";
        muenze.src = BILDER[ergebnis];

        setTimeout(() => {
            window.location.href = tipp === ergebnis ? "suuwe.html" : "marle.html";
        }, ANZEIGE_MS);
    }, DREH_DAUER_MS);
}

kopfKnopf.addEventListener("click", () => werfen("Kopf"));
zahlKnopf.addEventListener("click", () => werfen("Zahl"));

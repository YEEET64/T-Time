// Tipp-Effekt im Hero
const woerter = ["Texte schreiben.", "Bilder erkennen.", "Sprachen übersetzen.", "Schach spielen.", "Code programmieren."];
const tippen = document.getElementById("tippen");
let wortIndex = 0;
let zeichenIndex = 0;
let loeschen = false;

function tippSchritt() {
    const wort = woerter[wortIndex];
    zeichenIndex += loeschen ? -1 : 1;
    tippen.textContent = wort.slice(0, zeichenIndex);

    let pause = loeschen ? 40 : 90;
    if (!loeschen && zeichenIndex === wort.length) {
        loeschen = true;
        pause = 1500;
    } else if (loeschen && zeichenIndex === 0) {
        loeschen = false;
        wortIndex = (wortIndex + 1) % woerter.length;
        pause = 300;
    }
    setTimeout(tippSchritt, pause);
}
tippSchritt();

// Zahlen hochzählen, sobald sie sichtbar werden
function hochzaehlen(element) {
    const ziel = Number(element.dataset.ziel);
    const dauer = 1500;
    const start = performance.now();

    function schritt(jetzt) {
        const anteil = Math.min((jetzt - start) / dauer, 1);
        element.textContent = Math.floor(ziel * anteil);
        if (anteil < 1) requestAnimationFrame(schritt);
    }
    requestAnimationFrame(schritt);
}

// Bereiche beim Scrollen einblenden
const beobachter = new IntersectionObserver((eintraege) => {
    eintraege.forEach((eintrag) => {
        if (!eintrag.isIntersecting) return;
        eintrag.target.classList.add("sichtbar");
        eintrag.target.querySelectorAll("[data-ziel]").forEach(hochzaehlen);
        beobachter.unobserve(eintrag.target);
    });
}, { threshold: 0.2 });

document.querySelectorAll(".bereich").forEach((bereich) => {
    bereich.classList.add("versteckt");
    beobachter.observe(bereich);
});

// Mini-Chatbot mit festen Antworten
const antworten = [
    { stichwoerter: ["hallo", "hi", "hey", "servus"], antwort: "Hallo! Schön, dass du da bist. 😊" },
    { stichwoerter: ["was ist ki", "ki?", "künstliche intelligenz"], antwort: "KI sind Programme, die aus Daten lernen und Aufgaben lösen, für die man sonst menschliche Intelligenz braucht." },
    { stichwoerter: ["witz"], antwort: "Warum ist der Roboter in den Urlaub gefahren? Er musste mal seine Batterien aufladen. 🔋" },
    { stichwoerter: ["wer bist du", "name"], antwort: "Ich bin der Mini-Bot. Ehrlich gesagt bin ich nur ein paar Zeilen JavaScript. 🤖" },
    { stichwoerter: ["gefährlich", "angst", "risiko"], antwort: "KI hat Chancen und Risiken. Wichtig ist, sie verantwortungsvoll einzusetzen. Mehr dazu oben bei „Chancen & Risiken“." },
    { stichwoerter: ["danke"], antwort: "Gern geschehen!" },
    { stichwoerter: ["link"], antwort: "/wasvx!" },
];

const verlauf = document.getElementById("verlauf");
const chatform = document.getElementById("chatform");
const chateingabe = document.getElementById("chateingabe");

function nachrichtAnzeigen(text, von) {
    const blase = document.createElement("div");
    blase.className = "nachricht " + von;
    blase.textContent = text;
    verlauf.appendChild(blase);
    verlauf.scrollTop = verlauf.scrollHeight;
}

function antwortFinden(text) {
    const klein = text.toLowerCase();
    const treffer = antworten.find((eintrag) => eintrag.stichwoerter.some((wort) => klein.includes(wort)));
    return treffer ? treffer.antwort : "Das verstehe ich leider nicht. Ich bin eben nur eine sehr kleine KI. 🙈";
}

chatform.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = chateingabe.value.trim();
    if (!text) return;

    nachrichtAnzeigen(text, "nutzer");
    chateingabe.value = "";
    setTimeout(() => nachrichtAnzeigen(antwortFinden(text), "bot"), 500);
});
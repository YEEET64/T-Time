const form = document.querySelector(".login");
const fehler = document.getElementById("fehler");
let fehlversuche = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const benutzername = document.getElementById("benutzername").value;
    const passwort = document.getElementById("passwort").value;

    if (benutzername === "TomNguyen" && passwort === "T-ZEIT") {
        window.location.href = "suuwe.html";
        return;
    }

    fehlversuche++;

    if (fehlversuche >= 3) {
        window.location.href = "htaed.html";
        return;
    }

    const rest = 3 - fehlversuche;
    fehler.textContent = `Benutzername oder Passwort falsch! Noch ${rest} ${rest === 1 ? "Versuch" : "Versuche"}.`;
    document.getElementById("passwort").value = "";
});

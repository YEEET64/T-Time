const GOOGOL = "1" + "0".repeat(100);

document.querySelector(".suche").addEventListener("submit", (event) => {
    event.preventDefault();
    const eingabe = document.querySelector(".suche input").value.trim();
    window.location.href = eingabe === GOOGOL ? "rando.html" : "htaed.html";
});

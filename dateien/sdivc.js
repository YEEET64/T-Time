document.getElementById("hoch").addEventListener("click", () => {
    window.location.href = "gladi.html";
});

document.getElementById("runter").addEventListener("click", () => {
    window.location.href = "hexcd.html";
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        window.location.href = "oofdc.html";
    }
});

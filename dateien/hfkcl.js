document.querySelectorAll(".sitz").forEach((sitz, index) => {
    sitz.addEventListener("click", () => {
        window.location.href = index === 5 ? "wioep.html" : "htaed.html";
    });
});
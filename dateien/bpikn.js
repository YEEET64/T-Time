const cookie = document.getElementById("cookie");
let klicks = 0;

cookie.addEventListener("click", () => {
    klicks++;
    if (klicks >= 16) {
        window.location.href = "vnpol.html";
    }
});

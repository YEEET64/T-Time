const darkModeButton = document.getElementById("darkModeButton");
let colorNumber = 1;
const  bannerimg = document.getElementById("bannerimg");

const slideLinks = document.getElementById("SlideLinks");
const slideRechts = document.getElementById("SlideRechts");
const slideKreis1 = document.getElementById("SlideKreis1");
const slideKreis2 = document.getElementById("SlideKreis2");
const moebel = document.querySelector(".moebel");


let slideNumber = 1;

slideLinks.addEventListener("mouseover", () => {
    slideLinks.src = "img/Interface/LinksD.png";
});

slideLinks.addEventListener("mouseleave", () => {
    slideLinks.src = "img/Interface/Links.png";
});

slideRechts.addEventListener("mouseover", () => {
    slideRechts.src = "img/Interface/RechtsD.png";
});

slideRechts.addEventListener("mouseleave", () => {
    slideRechts.src = "img/Interface/Rechts.png";
});

slideLinks.addEventListener("click", () => {
    linksSlide();
});

slideRechts.addEventListener("click", () => {
    rechtsSlide();
});

slideKreis1.addEventListener("click", () => {
    linksSlide();
});

slideKreis2.addEventListener("click", () => {
    rechtsSlide();
});


darkModeButton.addEventListener("click", () => {
    if (colorNumber == 1) {
        colorNumber = 2;
        bannerimg.src = "img/beach.webp";
        document.body.style.backgroundImage = "url('img/lightwood.jpg')";
        localStorage.setItem("darkmode", "an");
        document.getElementById("nightbutton").textContent = "Light Mode";


        if (slideNumber == 1) {
            slideKreis1.src = "img/Interface/GrauKreis.png";
            slideKreis2.src = "img/Interface/WeisKreis.png";
        } else {
            slideKreis1.src = "img/Interface/WeisKreis.png";
            slideKreis2.src = "img/Interface/GrauKreis.png";
        }
    } else {
        colorNumber = 1;
        bannerimg.src = "img/forest.png";
        document.body.style.backgroundImage = "url('img/wood.jpg')";
        localStorage.setItem("darkmode", "aus");
        document.getElementById("nightbutton").textContent = "Dark Mode";

        if (slideNumber == 1) {
            slideKreis1.src = "img/Interface/WeisKreis.png";
            slideKreis2.src = "img/Interface/GrauKreis.png";
        } else {
            slideKreis1.src = "img/Interface/GrauKreis.png";
            slideKreis2.src = "img/Interface/WeisKreis.png";
        }
    }
    document.body.classList.toggle("darkmode");
});

if (localStorage.getItem("darkmode") == "an") {
    darkModeButton.click();
}




function linksSlide () {
    if (slideNumber == 2) {
        slideNumber = 1;
        if (colorNumber == 1) {
            slideKreis1.src = "img/Interface/WeisKreis.png";
            slideKreis2.src = "img/Interface/GrauKreis.png";
        } else {
            slideKreis1.src = "img/Interface/GrauKreis.png";
            slideKreis2.src = "img/Interface/WeisKreis.png";
        }
        
        moebel.classList.remove("slide2");
    }
}

function rechtsSlide(){
    if (slideNumber == 1) {
        slideNumber = 2;
        if (colorNumber == 1) {
            slideKreis1.src = "img/Interface/GrauKreis.png";
            slideKreis2.src = "img/Interface/WeisKreis.png";
        } else {
            slideKreis1.src = "img/Interface/WeisKreis.png";
            slideKreis2.src = "img/Interface/GrauKreis.png";
        }
        moebel.classList.add("slide2");
    }
}


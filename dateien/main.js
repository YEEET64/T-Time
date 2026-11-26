if (window.location.pathname.endsWith("/kmasd.html")) {
    window.history.replaceState({ tTimePage: "kmasd" }, "", window.location.href);
    window.history.pushState({ tTimePage: "kmasd" }, "", window.location.href);

    window.addEventListener("popstate", function () {
        window.history.pushState({ tTimePage: "kmasd" }, "", window.location.href);
    });
}
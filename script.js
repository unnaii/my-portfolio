document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.getElementById("hero-text");
    const links = document.querySelectorAll(".code-link");
    const scrollDown = document.getElementById("scroll-down");

    if (!heroText || links.length === 0 || !scrollDown) {
        console.error("❌ Faltan elementos en el DOM");
        return;
    }

    // Estado inicial visible
    heroText.style.transform = "translate(-50%, -50%) scale(1)";
    heroText.style.opacity = "1";

    links.forEach(link => {
        link.style.opacity = "0";
        link.style.transform = "translateY(20px)";
        link.style.transition = "all 0.4s ease-out";
    });

    scrollDown.style.opacity = "1";
    scrollDown.style.transform = "translateX(-50%) scale(1)";
    scrollDown.style.transition = "all 0.3s ease-out";

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        // Escala hero
        let heroScale = 1 + scrollY / 200;
        if (heroScale > 3) heroScale = 3;
        heroText.style.transform = `translate(-50%, -50%) scale(${heroScale})`;

        // Opacidad hero
        let heroOpacity = 1 - scrollY / 600;
        if (heroOpacity < 0) heroOpacity = 0;
        heroText.style.opacity = heroOpacity;

        // Aparición de links
        let linkOpacity = (scrollY - 50) / 400;
        if (linkOpacity < 0) linkOpacity = 0;
        if (linkOpacity > 1) linkOpacity = 1;

        links.forEach(link => {
            link.style.opacity = linkOpacity;
            link.style.transform = `translateY(${(1 - linkOpacity) * 20}px)`;
        });

        // Scroll down
        if (scrollY > 10) {
            scrollDown.style.opacity = "0";
            scrollDown.style.transform = "translateX(-50%) scale(0.8)";
        } else {
            scrollDown.style.opacity = "1";
            scrollDown.style.transform = "translateX(-50%) scale(1)";
        }
    });
});

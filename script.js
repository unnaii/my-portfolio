const heroText = document.getElementById("hero-text");
const links = document.querySelectorAll(".code-link");
const scrollDown = document.getElementById("scroll-down");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    // 1️⃣ Escala hero sin mover verticalmente
    let heroScale = 1 + scrollY / 20; 
    if (heroScale > 60) heroScale = 60;
    heroText.style.transform = `translate(-50%, -50%) scale(${heroScale})`;

    // 2️⃣ Opacidad hero
    heroText.style.opacity = 1 - scrollY / 600;

    // 3️⃣ Links aparecen mientras hero desaparece
    let linkOpacity = (scrollY - 50) / 400;
    if (linkOpacity < 0) linkOpacity = 0;
    if (linkOpacity > 1) linkOpacity = 1;

    links.forEach(link => {
        link.style.opacity = linkOpacity;
        link.style.transform = `translateY(${(1 - linkOpacity) * 20}px)`;
    });

    // 4️⃣ Scroll down desaparece rápidamente al hacer scroll
    let scrollScale;
    if(scrollY > 10){
        scrollScale = 0.000000001; // prácticamente invisible
    } else {
        scrollScale = 1; // vuelve a tamaño original al top
    }
    scrollDown.style.transform = `translateX(-50%) scale(${scrollScale})`;
});

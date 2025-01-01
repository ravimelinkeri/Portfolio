const textrole = document.querySelector(".second");

const textroleLoad = () => {
    setTimeout(() => {
        textrole.textContent = "Frontend Developer";
    }, 0);
    setTimeout(() => {
        textrole.textContent = "React Developer";
    }, 4000);
    setTimeout(() => {
        textrole.textContent = "Java Fullstack Developer";
    }, 8000);
}

textroleLoad();
setInterval(textroleLoad, 12000);
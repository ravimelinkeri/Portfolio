const textrole = document.querySelector(".second");

const Hambargerbar = document.querySelector(".hambarger");

const hambargerManu = document.querySelector(".hambargerManu");
const Croos = document.querySelector(".cross");

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


Hambargerbar.addEventListener("click", () => {
//  console.log("Clicked");
 hambargerManu.classList.remove("hambargerManu");
 hambargerManu.classList.add("activehambargerManu");
});

Croos.addEventListener("click", () => {
    // console.log("cliked");
    hambargerManu.classList.add("hambargerManu");
    hambargerManu.classList.remove("activehambargerManu");
})

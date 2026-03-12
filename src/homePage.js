const menu = document.querySelector("#menu");

function homePageComponent(){
    const h1 = document.createElement("h1");
    const p1 = document.createElement("p");
    const btn = document.createElement("button");
    const div = document.createElement("div");
    div.classList.add("homepage-component")

    btn.addEventListener("click", () => menu.click());

    h1.textContent = "Welcome to Instant Delicacies Restaurant";
    p1.textContent = "Experience Greatness in Every Bite";
    btn.textContent = "Explore Menu";

    const elements = [h1, p1, btn];

    elements.forEach(el => div.appendChild(el));

    return div;
}

export {homePageComponent}
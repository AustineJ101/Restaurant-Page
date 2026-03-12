import "./styles.css";
import { homePageComponent } from "./homePage.js";
import { menuComponent } from "./menu.js";
import { aboutComponent } from "./about.js";
import { clearContent, render, setState } from "./utils.js";

const nav = document.querySelector("nav");
const home = document.querySelector("#home");

nav.addEventListener("click", (e) => {
    let buttonId = e.target.id;

    switch(buttonId){
        case "home":
            clearContent();
            render(homePageComponent);
            setState(buttonId)
            break;
        case "menu":
            clearContent();
            render(menuComponent);
            setState(buttonId)
            break;
        case "about":
            clearContent();
            render(aboutComponent);
            setState(buttonId)
    }
})

home.click();



const contentContainer = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

function clearContent(){
     contentContainer.innerHTML = "";
}

function render(component){
    contentContainer.appendChild(component());
}

function setState(id){
    switch(id){
        case "home":
            home.classList.add("is-active");
            menu.classList.remove("is-active");
            about.classList.remove("is-active");
            break;
        case "menu":
            menu.classList.add("is-active");
            home.classList.remove("is-active");
            about.classList.remove("is-active");
            break;
        case "about":
            about.classList.add("is-active");
            home.classList.remove("is-active");
            menu.classList.remove("is-active");
    }
}

export {clearContent, render, setState}
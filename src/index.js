
import { initialPageLoad, loadHome } from "./homepage";
import { loadAbout } from "./about";
import { loadMenu } from "./menu";
import "./styles.css";

initialPageLoad();

const navigation  = document.querySelector("nav");


navigation.addEventListener("click", (event)=>{
  const target = event.target;
  switch(target.id){
    case "home":
      loadHome();
      break;
    case "menu":
      loadMenu();
      break;
    case "about":
      loadAbout();
      break;
  }
})

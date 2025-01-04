import { loadMenu } from "./menu";
const container = document.querySelector("#content");
const headline =  document.createElement("h2");
headline.textContent = "Experience Freshness in Every Bite"

const introText = document.createElement("p");
introText.textContent = "Our chefs combine the freshest ingredients with culinary expertise to create dishes that delight your senses."

const actionBtn = document.createElement("button");
actionBtn.textContent = "Explore Our Dishes";
actionBtn.addEventListener("click", loadMenu);

function initialPageLoad(){
  const content = [headline, introText, actionBtn];
  content.forEach(element => {
    container.appendChild(element);
  })
};


function loadHome(){
  container.textContent = "";
  initialPageLoad();
}

export {initialPageLoad, loadHome};
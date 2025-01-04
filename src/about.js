const container = document.querySelector("#content");
const div = document.createElement("div");


const heading = document.createElement("h2");
heading.textContent = "About Us";
heading.style.textAlign = "center";


const paragraph = document.createElement("p");
paragraph.textContent = "At Austine's, we pride ourselves on delivering an exceptional dining experience. Our chefs combine the freshest ingredients with culinary expertise to create dishes that delight your senses. Whether you're here for a casual lunch, a romantic dinner, or a special celebration, our restaurant is the perfect destination."

function loadAbout(){
  container.textContent = "";
  const content = [heading, paragraph]
  content.forEach(element => {
    div.appendChild(element);
  });

  container.appendChild(div);
}

export {loadAbout};
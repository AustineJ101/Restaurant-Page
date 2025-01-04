const container = document.querySelector("#content");

const div = document.createElement("div");

const heading1 = document.createElement("h2");
heading1.textContent = "Our Menu";
heading1.style.textAlign = "center";

const heading2 = document.createElement("h3");
heading2.textContent = "Main Courses"

const mainCourse = document.createElement("section");

const list =document.createElement("ul");

const courses = [
  "Grilled Salmon: Served with lemon butter sauce and seasonal vegetables.",
  "Chicken Alfredo Pasta: Creamy, hearty, and irresistible.",
  "Vegetarian Pizza: Topped with garden-fresh vegetables and mozzarella.",
  "Stuffed Mushrooms: Baked mushrooms filled with herbed cream cheese.",
  "Bruschetta: Fresh tomatoes, basil, and olive oil on crisp baguette slices.",
  "Garlic Bread: A golden-crusted classic, seasoned with herbs.",
  "Tiramisu: An Italian classic with a coffee kick.",
  
];


(function createItems(){
  let index = 0;
  let id = 1;
  for(let i = courses.length; i > 0; i --){
    const item = document.createElement("li");
    item.setAttribute("id", `item-${id}`);
    id += 1;

    item.textContent = courses[index];
    index += 1;

    list.appendChild(item);
    
  }

  mainCourse.appendChild(heading2);
  mainCourse.appendChild(list);
  div.appendChild(heading1);
  div.appendChild(mainCourse);


})();

function loadMenu(){
  container.textContent = "";
  container.appendChild(div);

}

export {loadMenu};
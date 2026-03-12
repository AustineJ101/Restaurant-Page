function menuComponent(){
    const menuItems = [
        {
            name: "Burger",
            url: "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg",
            price: "Ksh 900"
        },

         {
            name: "Pizza",
            url: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg",
            price: "Ksh 1,400"
         },

         {
            name: "Fries",
            url: "https://www.inspiredtaste.net/wp-content/uploads/2022/10/Baked-French-Fries-Recipe-1200.jpg",
            price: "Ksh 500"
         }
    ]

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-component");

    const h1 = document.createElement("h1");
    h1.textContent = "Our Menu";
    menuContainer.appendChild(h1);

    menuItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card")
        const h2 = document.createElement("h2");
        const image = document.createElement("img");
        const p = document.createElement("p")

        h2.textContent = item.name;
        image.src = item.url;
        p.textContent = item.price;

        const elements = [image, h2, p];
        elements.forEach(el => {
            div.appendChild(el);
        });

        menuContainer.appendChild(div);
    })

    return menuContainer;

}

export {menuComponent}
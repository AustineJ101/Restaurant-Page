function aboutComponent(){
    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    const p = document.createElement("p");
    const div = document.createElement("div");
    div.classList.add("about-component");

    p.textContent = "At Instant Delicacies, we value great taste, speed and convenience.  We're passionate about serving delicious, freshly prepared fast food made with quality ingredients and bold flavors. Whether you're stopping by for a quick lunch, grabbing a bite with friends, or satisfying a late-night craving, our goal is to make every visit enjoyable and satisfying."

    const elements = [h1, p];

    elements.forEach(el => div.appendChild(el));

    return div;
}

export {aboutComponent}
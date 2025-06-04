document.body.style.backgroundColor = "silver";
document.body.style.width = "80%";
document.body.style.margin = "auto";

const title = document.getElementById("title");
title.style.color = "green";
title.style.fontSize = "300%";
title.style.textAlign = "center";

const h3s = document.querySelectorAll("h3");
h3s.forEach(function(h3) {
    h3.style.textTransform = "uppercase";
    h3.style.fontSize = "150%";
    h3.style.color = "green";
});

const fruitList = document.getElementById("fruits");
const newFruit = document.createElement("li");
newFruit.textContent = "Oranges";
fruitList.appendChild(newFruit);

const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Carrots";
vegList.appendChild(newVeg);

fruits.style.display = "flex";
fruits.style.gap = "5%";
fruits.style.fontSize = "130%";
fruits.style.marginBottom = "8%";


vegList.style.display = "flex";
vegList.style.gap = "8%";
vegList.style.fontSize = "130%";
vegList.style.marginBottom = "5%";


const subtitle = document.getElementById("subtitle");

subtitle.style.fontSize = "170%";
subtitle.style.textAlign = "center";
subtitle.style.color = "green";
subtitle.style.padding = "0.5%";
subtitle.style.marginBottom = "5%";

function addImageToItem(list, imgLocation) {
    const img = document.createElement("img");
    img.src = imgLocation;
    img.alt = list.textContent;
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.objectFit = "contain";
    list.insertBefore(img, list.firstChild);
}

const fruitItems = fruitList.querySelectorAll("li");
const vegItems = vegList.querySelectorAll("li");

addImageToItem(fruitItems[0], "images/mango-js.jpg");
addImageToItem(fruitItems[1], "images/banana-js.jpg");
addImageToItem(fruitItems[2], "images/watermelon-js.jpg");
addImageToItem(fruitItems[3], "images/orange-js.jpg");

addImageToItem(vegItems[0], "images/onion-js.jpg");
addImageToItem(vegItems[1], "images/tomato-js.jpg");
addImageToItem(vegItems[2], "images/kales-js.jpg");
addImageToItem(vegItems[3], "images/carrot-js.jpg");


const allLists = document.querySelectorAll('ul, ol');
for (let list of allLists) {
    list.style.listStyleType = 'none';
}
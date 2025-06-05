document.body.style.backgroundColor = "silver";
document.body.style.width = "85%";
document.body.style.margin = "auto";


const nav = document.getElementById("navigation");
if (nav) {
    nav.style.display = "flex";
    nav.style.gap = "95px";
    nav.style.marginLeft = "29%";
    nav.style.top = "2%";
    nav.style.position = "absolute";
    nav.style.fontSize = "24px";
    nav.style.fontWeight = "semiBold";
}

const navLinks = document.querySelectorAll("#navigation a");
navLinks.forEach(link => {
    link.style.textDecoration = "none";
    link.style.color = "white";

});

const image = document.getElementById("shop");
image.style.position = "relative";
image.style.width = "120%";
image.style.height = "90vh";
image.style.marginBottom = "5%";
image.style.marginLeft = "-4%";
image.style.filter = "brightness(0.7)"


const title = document.getElementById("title");
title.style.color = "white";
title.style.fontSize = "340%";
title.style.top = '24%';
title.style.left = '57%';
title.style.transform = 'translate(-50%, -50%)';
title.style.position = 'absolute';


const wrapper = document.createElement('div');
wrapper.style.position = 'relative';
wrapper.style.display = 'inline-block';
image.parentNode.insertBefore(wrapper, image);
wrapper.appendChild(image);
wrapper.appendChild(title);
wrapper.appendChild(nav);


const h3s = document.querySelectorAll("h3");
h3s.forEach(function (h3) {
    h3.style.textTransform = "uppercase";
    h3.style.fontSize = "170%";
    h3.style.color = "green";
});

const fruitList = document.getElementById("fruits");
const newFruit = document.createElement("li");
newFruit.textContent = "Oranges";
fruitList.appendChild(newFruit);
newFruit.style.alignItems = 'center';


const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Carrots";
vegList.appendChild(newVeg);


fruits.style.display = "flex";
fruits.style.gap = "10%";
fruits.style.fontSize = "140%";
fruits.style.marginBottom = "10%";
fruits.style.color = "black";


vegList.style.display = "flex";
vegList.style.gap = "16%";
vegList.style.fontSize = "140%";
vegList.style.marginBottom = "10%";
vegList.style.color = "black";

const subtitle = document.getElementById("subtitle");

subtitle.style.fontSize = "350%";
subtitle.style.textAlign = "center";
subtitle.style.color = "green";
subtitle.style.padding = "0.5%";
subtitle.style.marginBottom = "7%";

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

addImageToItem(fruitItems[0], "images/mango-js.png");
addImageToItem(fruitItems[1], "images/banana-js.png");
addImageToItem(fruitItems[2], "images/watermelon-js.png");
addImageToItem(fruitItems[3], "images/orange-js.png");


addImageToItem(vegItems[0], "images/onion-js.png");
addImageToItem(vegItems[1], "images/tomato-js.png");
addImageToItem(vegItems[2], "images/kales-js.png");
addImageToItem(vegItems[3], "images/carrot-js.png");

const allLists = document.querySelectorAll('ul, ol');
for (let list of allLists) {
    list.style.listStyleType = 'none';
}

const orderButton = document.getElementById('order')
orderButton.addEventListener("click", () => {
orderButton.textContent = "Gioski";
orderButton.style.backgroundColor = "purple";
});
displayStatusPages();

document.getElementById("product-title").innerText = localStorage.getItem("clickedTitle");
document.getElementById("product-price").prepend(localStorage.getItem("clickedPrice"));
document.getElementById("product-description").innerText = localStorage.getItem("clickedDescription");
document.getElementById("product-useful").innerText = localStorage.getItem("clickedUseful");
document.getElementById("product-img").src = localStorage.getItem("clickedImg");

const aditionalProducts = document.getElementById("more-products");

for (let i = 0; i < 4; i++) {
    let itemElement = document.createElement('div');
    itemElement.classList.add('products__item');
    itemElement.innerHTML = itemTemplate(productsData, i);
    itemElement.id = productsData[i].id;

    aditionalProducts.appendChild(itemElement);
};

document.querySelector(".product__btn").addEventListener("click", () => {
    let openedProduct = JSON.parse(localStorage.getItem("openedProduct"));

    for (let i = 0; i < productsData.length; i++) {
        if (openedProduct.id == productsData[i].id) {
            if (!doesIdExist(openedProduct.id)) {
                addToCart(productsData[i]);
            }
        }
    }
});

openProductPage();
makeOrderWork();
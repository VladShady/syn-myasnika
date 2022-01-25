$('.fresh__slider-content').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
    draggable: false,
});

addPageToStatusPages("about.html", { name: "О компании", link: "about.html" });
displayStatusPages();

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.innerHTML = `<img src="img.svg/pagination-arrow.svg" alt="">`;
nextBtn.innerHTML = `<img src="img.svg/pagination-arrow.svg" alt="">`;

const aditionalProducts = document.getElementById("more-products");

for (let i = 0; i < 4; i++) {
    let itemElement = document.createElement('div');
    itemElement.classList.add('products__item');
    itemElement.innerHTML = itemTemplate(productsData, i);
    itemElement.id = productsData[i].id;

    aditionalProducts.appendChild(itemElement);
};

openProductPage();
makeOrderWork();
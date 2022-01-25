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

addPageToStatusPages("delivery.html", { name: "Доставка", link: "delivery.html" });
displayStatusPages();

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.innerHTML = `<img src="img.svg/pagination-arrow.svg" alt="">`;
nextBtn.innerHTML = `<img src="img.svg/pagination-arrow.svg" alt="">`;
$(document).ready(function () {
    $('.slider__content').slick({
        dots: true,
        arrows: true,
        draggable: false,
    });
});

addPageToStatusPages("index.html", { name: "Главная", link: "index.html" });

const productList = document.getElementById("products-list");

for (let i = 0; i < 8; i++) {
    let itemElement = document.createElement('div');
    itemElement.classList.add('products__item');
    itemElement.innerHTML = itemTemplate(productsData, i);
    itemElement.id = productsData[i].id;

    productList.appendChild(itemElement);
};

openProductPage();
makeOrderWork();

$("#show-more").one("click", function () {
    $(".products__show-more").addClass("hide");
    const productList = document.getElementById("products-list");

    for (let i = 8; i < 16; i++) {
        let itemElement = document.createElement('div');
        itemElement.classList.add('products__item');
        itemElement.innerHTML = itemTemplate(productsData, i);
        itemElement.id = productsData[i].id;

        productList.appendChild(itemElement);
    }

    openProductPage();
    makeOrderWork();
});

$(".scroll-down").click(function () {
    $('html, body').animate({
        scrollTop: $(".cats").offset().top
    }, 30, "linear");
});

const players = document.querySelectorAll('.youtube-player')

const loadPlayer = function (event) {
    const target = event.currentTarget
    const iframe = document.createElement('iframe')

    iframe.height = target.clientHeight
    iframe.width = target.clientWidth
    iframe.src = 'https://www.youtube.com/embed/' + target.dataset.videoId + '?autoplay=1'
    iframe.setAttribute('frameborder', 0)

    target.classList.remove('pristine')

    if (target.children.length) {
        target.replaceChild(iframe, target.firstElementChild)
    } else {
        target.appendChild(iframe)
    }
}

const config = { once: true }

Array.from(players).forEach(function (player) {
    player.addEventListener('click', loadPlayer, config)
})



$(window).scroll(function (event) {
    const scroll = $(window).scrollTop();
    if (scroll >= 736) {
        $(".anchor").addClass("show");
    } else {
        $(".anchor").removeClass("show");
    }
});

$(".anchor").on('click', function () {
    window.scrollTo(0, 0);
});
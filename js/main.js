$(document).ready(function () {
    $('.slider__content').slick({
        dots: true,
        arrows: true,
        draggable: false,
    });

    const productList = document.getElementById("products-list");

    for (let i = 0; i < 8; i++) {
        let itemElement = document.createElement('div');
        itemElement.classList.add('products__item');
        itemElement.innerHTML = itemTemplate(productsData, i);

        productList.appendChild(itemElement);
    }
});



$("#show-more").one("click", function () {
    // $(".products__list").append($(".product__block-wrap").html());
    $(".products__show-more").addClass("hide");
    // $(".products__block:not(:first)").children().addClass("new-hide");
    const productList = document.getElementById("products-list");

    for (let i = 8; i < 16; i++) {
        let itemElement = document.createElement('div');
        itemElement.classList.add('products__item');
        itemElement.innerHTML = itemTemplate(productsData, i);

        productList.appendChild(itemElement);
    }
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

$("#check").on('click', function () {
    $(".header").toggleClass('show');
    $("body").toggleClass('no-scroll');
});

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



$("#plus-minus-icon__kind").on('click', function () {
    $("#v-line__kind").toggleClass('hide');
    $("#filter__kind-form").toggleClass('hide');
    $("#filter__title-kind").toggleClass('hidden');
});

$("#plus-minus-icon__price").on('click', function () {
    $("#v-line__price").toggleClass('hide');
    $("#filter__price-form").toggleClass('hide');
    $("#filter__title-price").toggleClass('hidden');
});

$("#plus-minus-icon__prod").on('click', function () {
    $("#v-line__prod").toggleClass('hide');
    $("#filter__prod-form").toggleClass('hide');
    $("#filter__title-prod").toggleClass('hidden');
});

$(".scheme__text").on('click', function () {
    $("body").toggleClass('no-scroll');
    $("#modal-scheme").toggleClass("show");
})

$("#modal-close").on('click', function () {
    $("#modal-scheme").toggleClass("show");
    $("body").toggleClass('no-scroll');
});

let productsData = [
    {
        title: "Говядина",
        text: "Говя́дина или говяжье мясо — кулинарное наименование мяса крупного рогатого скота",
        imgSrc: "img.jpg/2.jpg",
        price: 450,
        sellType: "Розница",
        production: "homemade"
    },
    {
        title: "Баранина",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/3.jpg",
        price: 730,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Курица",
        text: "Мясо кролика отличается исключительно высокими питательными достоинствами",
        imgSrc: "img.jpg/4.jpg",
        price: 730,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Говядина",
        text: "Говя́дина или говяжье мясо — кулинарное наименование мяса крупного рогатого скота",
        imgSrc: "img.jpg/6.jpg",
        price: 900,
        sellType: "Розница",
        production: ""
    },
    {
        title: "Баранина",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/7.jpg",
        price: 730,
        sellType: "Розница",
        production: "homemade"
    },
    {
        title: "Баранина",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/3.jpg",
        price: 730,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Домашний кролик",
        text: "Мясо кролика отличается исключительно высокими питательными достоинствами",
        imgSrc: "img.jpg/8.jpg",
        price: 670,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Свинина",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/1.jpg",
        price: 730,
        sellType: "Розница",
        production: "homemade"
    },
    {
        title: "Гусь",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/1.jpg",
        price: 730,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Говядина",
        text: "Говя́дина или говяжье мясо — кулинарное наименование мяса крупного рогатого скота",
        imgSrc: "img.jpg/2.jpg",
        price: 450,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Баранина",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/3.jpg",
        price: 730,
        sellType: "Розница",
        production: ""
    },
    {
        title: "Курица",
        text: "Мясо кролика отличается исключительно высокими питательными достоинствами",
        imgSrc: "img.jpg/4.jpg",
        price: 730,
        sellType: "Розница",
        production: ""
    },
    {
        title: "Говядина2",
        text: "Говя́дина или говяжье мясо — кулинарное наименование мяса крупного рогатого скота",
        imgSrc: "img.jpg/2.jpg",
        price: 450,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Баранина2",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/3.jpg",
        price: 730,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Курица2",
        text: "Мясо кролика отличается исключительно высокими питательными достоинствами",
        imgSrc: "img.jpg/4.jpg",
        price: 730,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Говядина2",
        text: "Говя́дина или говяжье мясо — кулинарное наименование мяса крупного рогатого скота",
        imgSrc: "img.jpg/6.jpg",
        price: 900,
        sellType: "Розница",
        production: "homemade"
    },
    {
        title: "Баранина2",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/7.jpg",
        price: 730,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Баранина2",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/3.jpg",
        price: 730,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Домашний кролик2",
        text: "Мясо кролика отличается исключительно высокими питательными достоинствами",
        imgSrc: "img.jpg/8.jpg",
        price: 670,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Свинина2",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/1.jpg",
        price: 730,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Свинина2",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/1.jpg",
        price: 730,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Говядина2",
        text: "Говя́дина или говяжье мясо — кулинарное наименование мяса крупного рогатого скота",
        imgSrc: "img.jpg/2.jpg",
        price: 450,
        sellType: "Розница",
        production: "homemade"
    },
    {
        title: "Баранина2",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/3.jpg",
        price: 730,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Курица2",
        text: "Мясо кролика отличается исключительно высокими питательными достоинствами",
        imgSrc: "img.jpg/4.jpg",
        price: 730,
        sellType: "Розница",
        production: ""
    },
    {
        title: "Индейка",
        text: "Говя́дина или говяжье мясо — кулинарное наименование мяса крупного рогатого скота",
        imgSrc: "img.jpg/2.jpg",
        price: 450,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Баранина3",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/3.jpg",
        price: 730,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Курица3",
        text: "Мясо кролика отличается исключительно высокими питательными достоинствами",
        imgSrc: "img.jpg/4.jpg",
        price: 730,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Говядина3",
        text: "Говя́дина или говяжье мясо — кулинарное наименование мяса крупного рогатого скота",
        imgSrc: "img.jpg/6.jpg",
        price: 900,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Баранина3",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/7.jpg",
        price: 730,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Баранина3",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/3.jpg",
        price: 730,
        sellType: "Розница",
        production: "homemade"
    },
    {
        title: "Домашний кролик3",
        text: "Мясо кролика отличается исключительно высокими питательными достоинствами",
        imgSrc: "img.jpg/8.jpg",
        price: 670,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Свинина3",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/1.jpg",
        price: 730,
        sellType: "Розница",
        production: ""
    },
    {
        title: "Свинина3",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/1.jpg",
        price: 730,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Говядина3",
        text: "Говя́дина или говяжье мясо — кулинарное наименование мяса крупного рогатого скота",
        imgSrc: "img.jpg/2.jpg",
        price: 450,
        sellType: "Оптом",
        production: ""
    },
    {
        title: "Баранина3",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/3.jpg",
        price: 730,
        sellType: "Розница",
        production: ""
    },
    {
        title: "Курица3",
        text: "Мясо кролика отличается исключительно высокими питательными достоинствами",
        imgSrc: "img.jpg/4.jpg",
        price: 730,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Свинина3",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/1.jpg",
        price: 730,
        sellType: "Оптом",
        production: "homemade"
    },
    {
        title: "Говядина3",
        text: "Говя́дина или говяжье мясо — кулинарное наименование мяса крупного рогатого скота",
        imgSrc: "img.jpg/2.jpg",
        price: 450,
        sellType: "Розница",
        production: "homemade"
    },
    {
        title: "Баранина3",
        text: "Наиболее ценным является мясо молодых (до 18 месяцев) баранов или овец",
        imgSrc: "img.jpg/3.jpg",
        price: 730,
        sellType: "Розница",
        production: ""
    },
    {
        title: "Курица3",
        text: "Мясо кролика отличается исключительно высокими питательными достоинствами",
        imgSrc: "img.jpg/4.jpg",
        price: 730,
        sellType: "Оптом",
        production: "homemade"
    },
];

const singlePage = document.getElementById("products-container");
const paginationElement = document.getElementById("pagination");

let currentPage = 1;
let itemNum = 12;

function itemTemplate(arr, idOfItem) {
    return `
    <img class="products__item-img" src=${arr[idOfItem].imgSrc} alt="">
    <div class="products__item-name">${arr[idOfItem].title}</div>
    <div class="products__item-text">${arr[idOfItem].text}</div>

    <div class="products__item-order">
        <span class="products__item-price">${arr[idOfItem].price} ₽</span>
        <button class="products__item-btn" type="button">
            Заказать
            <img class="shop-cart__btn" src="img.svg/shopping-cart.svg" alt="">
        </button>
    </div>
    <div class="new-marker">New</div>
`
}

function DisplayPage(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];

        let itemElement = document.createElement('div');
        itemElement.classList.add('products__item');
        itemElement.innerHTML = itemTemplate(paginatedItems, i);

        wrapper.appendChild(itemElement);
    }
}

function SetupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = "";

    let pageCount = Math.ceil(items.length / rowsPerPage);

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }

    let prevButton = document.createElement('button');
    let nextButton = document.createElement('button');

    prevButton.classList.add('prev-btn');
    nextButton.classList.add('next-btn');

    prevButton.innerHTML = `<img src="img.svg/pagination-arrow.svg" alt="">`;
    nextButton.innerHTML = `<img src="img.svg/pagination-arrow.svg" alt="">`;

    prevButton.addEventListener('click', function () {
        if (currentPage != 1) {
            currentPage--;
            DisplayPage(items, singlePage, itemNum, currentPage);

            let currentButton = document.querySelector("#pagination button.active");
            currentButton.classList.remove('active');

            currentButton.previousElementSibling.classList.add('active');
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentPage < pageCount) {
            currentPage++;
            DisplayPage(items, singlePage, itemNum, currentPage);

            let currentButton = document.querySelector("#pagination button.active");
            currentButton.classList.remove('active');

            currentButton.nextElementSibling.classList.add('active');
        }
    });

    wrapper.prepend(prevButton);
    wrapper.append(nextButton);
}

function PaginationButton(page, items) {
    let button = document.createElement('button');

    button.innerText = page;
    button.classList.add('categories__pagination-btn');

    if (currentPage == page) {
        button.classList.add('active');
    }

    button.addEventListener('click', function () {
        currentPage = page;
        DisplayPage(items, singlePage, itemNum, currentPage);

        let currentButton = document.querySelector("#pagination button.active");

        if (currentButton) {
            currentButton.classList.remove('active');
        }
        button.classList.add('active');
    });

    return button;
}

DisplayPage(productsData, singlePage, itemNum, currentPage);
SetupPagination(productsData, paginationElement, itemNum);

searchInput = document.getElementById("search-input");

document.getElementById("search-btn").addEventListener('click', function () {
    const afterSearch = productsData.filter((item) => {
        return item.title.toLowerCase().includes(searchInput.value.toLowerCase());
    });

    DisplayPage(findCommonElement(priceSorted, afterSearch), singlePage, itemNum, currentPage);
    SetupPagination(findCommonElement(priceSorted, afterSearch), paginationElement, itemNum);
});





const rangeInput = document.querySelectorAll(".range__input input"),
    priceInput = document.querySelectorAll(".price__input"),
    range = document.querySelector(".range__slider .progress");
let priceGap = 50;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "price__input price__input--min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});


let combinedFilter;

let minVal = parseInt(rangeInput[0].value),
    maxVal = parseInt(rangeInput[1].value);

let priceSorted = productsData.filter(item => {
    if (item.price >= minVal && item.price <= maxVal) return item;
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        minVal = parseInt(rangeInput[0].value);
        maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        };

        priceSorted = productsData.filter(item => {
            if (item.price >= minVal && item.price <= maxVal) return item;
        });

        if (document.querySelector("input[name='sellType']:checked") && !document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='kind']:checked")) {
            combinedFilter = findCommonElement(priceSorted, Filter("sellType"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);

        } else if (document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='sellType']:checked") && !document.querySelector("input[name='kind']:checked")) {
            combinedFilter = findCommonElement(priceSorted, Filter("production"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else if (document.querySelector("input[name='kind']:checked") && !document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='sellType']:checked")) {
            combinedFilter = findCommonElement(priceSorted, Filter("kind"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else if (document.querySelector("input[name='kind']:checked") && document.querySelector("input[name='sellType']:checked") && !document.querySelector("input[name='production']:checked")) {
            combinedFilter = findCommonElementOf3(priceSorted, Filter("kind"), Filter("sellType"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else if (document.querySelector("input[name='kind']:checked") && document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='sellType']:checked")) {
            combinedFilter = findCommonElementOf3(priceSorted, Filter("kind"), Filter("production"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else if (document.querySelector("input[name='sellType']:checked") && document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='kind']:checked")) {
            combinedFilter = findCommonElementOf3(priceSorted, Filter("sellType"), Filter("production"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else if (document.querySelector("input[name='sellType']:checked") && document.querySelector("input[name='production']:checked") && document.querySelector("input[name='kind']:checked")) {
            combinedFilter = findCommonElement(priceSorted, findCommonElementOf3(Filter("kind"), Filter("sellType"), Filter("production")));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else {
            DisplayPage(priceSorted, singlePage, itemNum, currentPage);
            SetupPagination(priceSorted, paginationElement, itemNum);

        }
    });
});

function Filter(nameOfInput) {
    let selected = document.querySelector(`input[name='${nameOfInput}']:checked`).value;
    let arrOfSelected;

    if (nameOfInput == "kind") {
        arrOfSelected = productsData.filter(item => {
            if (item.title.toLowerCase().includes(selected.toLowerCase())) {
                return item;
            }
        });

    } else if (nameOfInput == "sellType") {
        arrOfSelected = productsData.filter(item => {
            if (item.sellType.toLowerCase().includes(selected.toLowerCase())) {
                return item;
            }
        });

    } else if (nameOfInput == "production") {
        arrOfSelected = productsData.filter(item => {
            if (item.production.toLowerCase().includes(selected.toLowerCase())) {
                return item;
            }
        });
    }

    return arrOfSelected;
}

function findCommonElement(array1, array2) {
    let result = [];

    for (let i = 0; i < array1.length; i++) {

        for (let j = 0; j < array2.length; j++) {

            if (array1[i] == array2[j]) {

                result.push(array1[i]);
            }
        }
    }

    return result;
}

function findCommonElementOf3(array1, array2, array3) {
    let result = [];

    for (let i = 0; i < array1.length; i++) {

        for (let j = 0; j < array2.length; j++) {

            for (let k = 0; k < array3.length; k++)
                if (array1[i] == array3[k] && array1[i] == array2[j]) {

                    result.push(array1[i]);
                }
        }
    }

    return result;
}


$("input[name='kind']").on('click', function () {
    if (document.querySelector("input[name='sellType']:checked") && !document.querySelector("input[name='production']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("kind"), Filter("sellType")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);

    } else if (document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='sellType']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("kind"), Filter("production")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else if (document.querySelector("input[name='sellType']:checked") && document.querySelector("input[name='production']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElementOf3(Filter("kind"), Filter("sellType"), Filter("production")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else {
        DisplayPage(findCommonElement(priceSorted, Filter("kind")), singlePage, itemNum, currentPage);
        SetupPagination(findCommonElement(priceSorted, Filter("kind")), paginationElement, itemNum);
    }
})

$("input[name='sellType']").on('click', function () {
    if (document.querySelector("input[name='kind']:checked") && !document.querySelector("input[name='production']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("sellType"), Filter("kind")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);

    } else if (document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='kind']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("sellType"), Filter("production")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else if (document.querySelector("input[name='kind']:checked") && document.querySelector("input[name='production']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElementOf3(Filter("sellType"), Filter("kind"), Filter("production")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else {
        DisplayPage(findCommonElement(priceSorted, Filter("sellType")), singlePage, itemNum, currentPage);
        SetupPagination(findCommonElement(priceSorted, Filter("sellType")), paginationElement, itemNum);
    }
})

$("input[name='production']").on('click', function () {

    if (document.querySelector("input[name='kind']:checked") && !document.querySelector("input[name='sellType']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("production"), Filter("kind")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);

    } else if (document.querySelector("input[name='sellType']:checked") && !document.querySelector("input[name='kind']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("production"), Filter("sellType")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else if (document.querySelector("input[name='kind']:checked") && document.querySelector("input[name='sellType']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElementOf3(Filter("production"), Filter("kind"), Filter("sellType")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else {
        DisplayPage(findCommonElement(priceSorted, Filter("production")), singlePage, itemNum, currentPage);
        SetupPagination(findCommonElement(priceSorted, Filter("production")), paginationElement, itemNum);
    }
})

function resetFilter(nameOfInput) {
    var el = document.getElementsByName(nameOfInput);
    for (var i = 0; i < el.length; i++) {
        el[i].checked = false;
    }

    rangeInput[0].value = 0;
    rangeInput[1].value = 1000;
    priceInput[0].value = 0;
    priceInput[1].value = 1000;

    range.style.left = 0;
    range.style.right = 0;

    DisplayPage(productsData, singlePage, itemNum, currentPage);
    SetupPagination(productsData, paginationElement, itemNum);
}


$("#reset-filter").on("click", function () {
    resetFilter("kind");
    resetFilter("sellType");
    resetFilter("production");
});






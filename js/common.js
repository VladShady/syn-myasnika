window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        let cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("hasCodeRunBefore", true);
    }
}

$("#check").checked = false;

findCurrentPage("index.html", "mainPage");
findCurrentPage("shop.html", "shopPage");
findCurrentPage("delivery.html", "deliveryPage");
findCurrentPage("about.html", "aboutPage");

let clickedTitle, clickedPrice, clickedDescription, clickedUseful, clickedImg;
let cartItems = JSON.parse(localStorage.getItem("cartItems"));
let storedCartItems;

document.querySelectorAll(".shop-cart-counter").forEach(el => el.innerText = cartItems.length);

function findCurrentPage(url, classNameToFind) {
    if (document.URL.includes(`${url}`)) {
        document.querySelectorAll(`.${classNameToFind}`).forEach(el => {
            el.classList.add("active");
        });
    }
}

$("#check").on('click', function () {
    $(".header").toggleClass('show');
    $("body").toggleClass('no-scroll');
});

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

function openProductPage() {
    let currentItems = document.querySelectorAll(".products__item-img");
    currentItems.forEach(el => {
        el.addEventListener('click', function () {

            for (let i = 0; i < productsData.length; i++) {
                if (onClick(el) === productsData[i].id) {
                    clickedTitle = productsData[i].title;
                    clickedPrice = productsData[i].price;
                    clickedDescription = productsData[i].description;
                    clickedUseful = productsData[i].useful;
                    clickedImg = productsData[i].imgSrc;

                    localStorage.setItem("clickedTitle", clickedTitle);
                    localStorage.setItem("clickedPrice", clickedPrice);
                    localStorage.setItem("clickedDescription", clickedDescription);
                    localStorage.setItem("clickedUseful", clickedUseful);
                    localStorage.setItem("clickedImg", clickedImg);

                    localStorage.setItem("openedProduct", JSON.stringify(productsData[i]));
                }
            }
            location.href = "productPage.html";
        })
    });
}

function onClick(el) {
    return el.parentNode.id;
};

function returnInputValue(event) {
    let countEl = event.target.parentNode.querySelector(".count");

    let priceOfCurrItem = event.target.parentNode.parentNode.querySelector(".cart__item-price").innerText;

    let currTotal = parseInt(document.querySelector(".price-text").innerText);

    if (event.target.className == "plusBtn") {
        currTotal += parseInt(priceOfCurrItem);
        countEl.value = Number(countEl.value) + 1;
    } else {
        if (Number(countEl.value) > 1) {
            currTotal -= parseInt(priceOfCurrItem);
            if (Number(countEl.value) > 1) {
                countEl.value = Number(countEl.value) - 1;
            }
        }
    }
    event.target.parentNode.parentNode.querySelector(".sum-text").innerText = priceOfCurrItem * countEl.value;

    document.querySelector(".price-text").innerText = currTotal;

    return countEl.value;
}

function addToCart(productToAdd) {
    cartItems.push(productToAdd);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
};

function doesIdExist(idOfItem) {
    return cartItems.some(el => {
        return el.id == idOfItem;
    })
}

function makeOrderWork() {
    document.querySelectorAll(".products__item-btn").forEach(el => {
        el.addEventListener('click', () => {
            for (let i = 0; i < productsData.length; i++) {
                if (onClick(el.parentNode) == productsData[i].id) {
                    if (!doesIdExist(onClick(el.parentNode))) {
                        addToCart(productsData[i]);
                        document.querySelectorAll(".shop-cart-counter").forEach(el => el.innerText = cartItems.length);
                    }
                }
            }
        })
    });
}

$(".footer__shop-cart span, .shop-cart, .shop-cart-text").on('click', () => location.href = "cart.html");

$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll >= 736) {
        $(".anchor").addClass("show");
    } else {
        $(".anchor").removeClass("show");
    }
});

$(".anchor").on('click', () => window.scrollTo(0, 0));

function cartItemTemplate(arr, idOfItem) {
    return `
    <img class="cart__item-delete" src="img.svg/delete.svg" />
    <div class="cart__item-wrap">
    <div class="cart__item-main">
        <img class="cart__item-img" src="${arr[idOfItem].imgSrc}" />
        <div class="cart__item-info">
            <p class="cart__item-title">${arr[idOfItem].title}</p>
            <p><span class="cart__item-price">${arr[idOfItem].price}</span> <span class="currency">руб./кг</span></p>
        </div>
    </div>

    <div class="v-counter">
        <a type="button" class="minusBtn"></a>
        <div class="count-wrap">
            <input type="number" size="2" value="1" class="count" id="input${idOfItem}" disabled="disabled" />
            <span class="kg">кг</span>
        </div>
        <a type="button" class="plusBtn"></a>
    </div>

    <p class="cart__item-sum"><span class="sum-text">${arr[idOfItem].price}</span> руб</p>
    </div>
    `
}

document.querySelectorAll(".logo__icon, .logo__title, .mainPage").forEach(el => {
    el.addEventListener("click", () => location.href = "index.html");
});

document.querySelectorAll(".shopPage").forEach(el => {
    el.addEventListener("click", () => location.href = "shop.html");
});

document.querySelectorAll(".deliveryPage").forEach(el => {
    el.addEventListener("click", () => location.href = "delivery.html");
});

document.querySelectorAll(".aboutPage").forEach(el => {
    el.addEventListener("click", () => location.href = "about.html");
});






